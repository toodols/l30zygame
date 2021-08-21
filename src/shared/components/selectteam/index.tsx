import Roact from "@rbxts/roact";
import Rodux, { Action } from "@rbxts/rodux";
import { Players, ReplicatedStorage, SoundService } from "@rbxts/services";

import { AnimateBinding } from "shared/util";
import { DisplayOrder } from "shared/types/DisplayOrders";
import { TeamsTypes } from "shared/types/Teams";
import { Pattern } from "./pattern";
import { Viewport } from "./viewport";
import { Models, Remotes } from "shared/items";

interface Props {
	ref: (c: SelectTeamGui) => void;
}
interface State {
	centerLocation: number;
	chooseScreen: boolean;
}
class SelectTeamGui extends Roact.Component<Props, State> {
	//technically it's a binding and the update function but same thing
	centerLineBinding = Roact.createBinding(0);
	leftPageBinding = Roact.createBinding(0);
	rightPageBinding = Roact.createBinding(0);
	centerLocation = Roact.createBinding(0.5);
	playButtonLocation = Roact.createBinding(1);
	leftCameraRef = Roact.createRef<Camera>();
	rightCameraRef = Roact.createRef<Camera>();
	selected = false; //prevents
	hoverSound: Sound;
	pressSound: Sound;
	release: Sound;
	didMount() {
		this.leftCameraRef.getValue()!.CFrame = CFrame.Angles(0, math.rad(-20), 0).mul(new CFrame(0, 0, 5));
		//this.leftCameraRef.getValue()!.CFrame = new CFrame(new Vector3(0, 0, -10), new Vector3(0, 0, 0));
		this.rightCameraRef.getValue()!.CFrame = CFrame.Angles(0, math.rad(-20), 0).mul(new CFrame(0, 0, 5));
	}

	onSelected(side: TeamsTypes) {
		this.selected = true;
		Remotes.TeamSelected.FireServer(side);
		this.hideMenu();
	}

	showPlayButton() {
		AnimateBinding(this.playButtonLocation, 0, 0.5);
	}

	hideMenu() {
		AnimateBinding(this.centerLocation, 0.5, 0.5);
		AnimateBinding(this.centerLineBinding, 0, 1);
		wait(0.5);
		AnimateBinding(this.rightPageBinding, 0, 0.7);
		AnimateBinding(this.leftPageBinding, 0, 0.7);
	}

	render() {
		return (
			<screengui
				Key="SelectTeamGui"
				DisplayOrder={DisplayOrder.SelectTeamGui}
				ZIndexBehavior="Sibling"
				ResetOnSpawn={false}
				IgnoreGuiInset={true}
			>
				<frame
					Key="ScreenLeft"
					Size={this.centerLocation[0].map((center) => new UDim2(center, 0, 1, 0))}
					BackgroundColor3={Color3.fromRGB(255, 255, 140)}
					AnchorPoint={this.leftPageBinding[0].map((step) => new Vector2(1 - step, 0))}
					BorderSizePixel={0}
				>
					<Pattern />

					<textbutton
						Key="Hitbox"
						Text=""
						BackgroundTransparency={1}
						AnchorPoint={new Vector2(0.5, 0.5)}
						Size={new UDim2(0.7, 0, 0.7, 0)}
						Position={new UDim2(0.5, 0, 0.4, 0)}
						Event={{
							MouseEnter: () => {
								this.hoverSound.Play();
								if (!this.selected) AnimateBinding(this.centerLocation, 0.6, 0.3);
							},
							MouseLeave: () => {
								if (!this.selected) AnimateBinding(this.centerLocation, 0.5, 0.3);
							},
							MouseButton1Click: () => {
								this.pressSound.Play();
								this.onSelected(TeamsTypes.Human);
							},
						}}
					>
						<Viewport Model={Models.Human} CameraRef={this.leftCameraRef} />
					</textbutton>
					<textlabel
						BackgroundTransparency={1}
						TextColor3={new Color3(0, 0, 0)}
						Text="Human"
						TextSize={45}
						Position={new UDim2(0.5, 0, 0.8, 0)}
						AnchorPoint={new Vector2(0.5, 0.5)}
						Size={new UDim2(0.4, 0, 0, 60)}
						TextTransparency={this.centerLocation[0].map((val) => {
							// 0.5 -> 0.6
							// 0 -> 0.1
							// 0 -> 1
							// 1 -> 0

							return 1 - (math.clamp(val, 0.5, 0.6) - 0.5) * 10;
						})}
					/>
				</frame>
				<frame
					Key="ScreenRight"
					Size={this.centerLocation[0].map((center) => new UDim2(1 - center, 0, 1, 0))}
					BackgroundColor3={Color3.fromRGB(105, 152, 83)}
					Position={Roact.joinBindings({
						center: this.centerLocation[0],
						step: this.rightPageBinding[0],
					}).map(({ center, step }) => {
						return new UDim2(1 - step * (1 - center), 0, 0, 0);
					})}
					BorderSizePixel={0}
				>
					<Pattern />
					<textbutton
						Key="Hitbox"
						Text=""
						BackgroundTransparency={1}
						AnchorPoint={new Vector2(0.5, 0.5)}
						Size={new UDim2(0.7, 0, 0.7, 0)}
						Position={new UDim2(0.5, 0, 0.4, 0)}
						Event={{
							MouseEnter: () => {
								this.hoverSound.Play();
								if (!this.selected) AnimateBinding(this.centerLocation, 0.4, 0.3);
							},
							MouseLeave: () => {
								if (!this.selected) AnimateBinding(this.centerLocation, 0.5, 0.3);
							},
							MouseButton1Click: () => {
								this.pressSound.Play();
								this.onSelected(TeamsTypes.Zombie);
							},
						}}
					>
						<Viewport Model={Models.Zombie} CameraRef={this.rightCameraRef} />
					</textbutton>
					<textlabel
						BackgroundTransparency={1}
						TextColor3={new Color3(0, 0, 0)}
						Text="Zombie"
						TextSize={45}
						Position={new UDim2(0.5, 0, 0.8, 0)}
						AnchorPoint={new Vector2(0.5, 0.5)}
						Size={new UDim2(0.4, 0, 0, 60)}
						TextTransparency={this.centerLocation[0].map((val) => {
							// 0.5 -> 0.4
							// 0.1 -> 0
							// 1 -> 0
							return (math.clamp(val, 0.4, 0.5) - 0.4) * 10;
						})}
					/>
				</frame>
				<frame
					Key="CenterLine"
					Size={new UDim2(0, 50, 1, 20)}
					BorderSizePixel={0}
					BackgroundColor3={new Color3(1, 1, 1)}
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={Roact.joinBindings([this.centerLocation[0], this.centerLineBinding[0]]).map(
						([center, step]) => {
							return new UDim2(center, 0, 2 - math.min(1.5, step * 3), 0);
						},
					)}
					Rotation={this.centerLineBinding[0].map((step) => {
						return step * 3;
					})}
					ZIndex={2}
				></frame>
				<textbutton
					AnchorPoint={this.leftPageBinding[0].map((step) => new Vector2(step, 1))}
					Position={new UDim2(1, 0, 1, 0)}
					BackgroundColor3={Color3.fromRGB(79, 197, 103)}
					Size={new UDim2(0.2, 0, 0.07, 0)}
					Text="Back"
					Font={"SourceSans"}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextSize={30}
					BorderSizePixel={0}
					ZIndex={3}
					Event={{
						MouseButton1Click: () => {
							this.showPlayButton();
							this.hideMenu();
						},
					}}
				>
					{/* <Pattern /> */}
					<uiaspectratioconstraint AspectRatio={8} />
					<uicorner CornerRadius={new UDim(0.06, 0)} />
					{/* <uigradient
							Color={new ColorSequence(Color3.fromRGB(141, 141, 141), Color3.fromRGB(255, 255, 255))}
							Rotation={90}
						/> */}
				</textbutton>
				<textbutton
					Key="PlayButton"
					BackgroundColor3={Color3.fromRGB(79, 197, 103)}
					Font={"SourceSans"}
					AnchorPoint={new Vector2(0.5, 0.5)}
					//start 0.85, end >=1.35
					Position={this.playButtonLocation[0].map((step) => new UDim2(0.5, 0, step / 2 + 0.85, 0))}
					Size={new UDim2(0.5, 0, 0.1, 0)}
					Text={"Play"}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextSize={40}
					TextWrapped={true}
					Event={{
						MouseEnter: () => {
							this.hoverSound.Play();
						},
						MouseButton1Click: () => {
							this.pressSound.Play();
							this.selected = false;
							AnimateBinding(this.playButtonLocation, 1, 0.5);
							AnimateBinding(this.centerLineBinding, 1, 1);
							wait(0.7);
							AnimateBinding(this.rightPageBinding, 1, 0.7);
							wait(0.5);
							AnimateBinding(this.leftPageBinding, 1, 0.7);
						},
					}}
				>
					<uiaspectratioconstraint AspectRatio={15} />
					<uicorner CornerRadius={new UDim(0.06, 0)} />
					{/* <uigradient
							Color={new ColorSequence(Color3.fromRGB(141, 141, 141), Color3.fromRGB(255, 255, 255))}
							Rotation={90}
						/> */}
				</textbutton>
			</screengui>
		);
	}
	constructor(props: Props) {
		super(props);
		this.props.ref(this);
		this.hoverSound = new Instance("Sound", SoundService);
		this.hoverSound.SoundId = "rbxassetid://718616853";
		this.pressSound = new Instance("Sound", SoundService);
		this.pressSound.SoundId = "rbxassetid://5980034517";
		this.release = new Instance("Sound", SoundService);
		this.release.SoundId = "rbxassetid://6042054037";
	}
}
export { SelectTeamGui };
