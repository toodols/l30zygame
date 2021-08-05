import Roact from "@rbxts/roact";
import Rodux, { Action } from "@rbxts/rodux";
import { ReplicatedStorage } from "@rbxts/services";

import { Animate } from "shared/Modules/util";
import { DisplayOrder } from "shared/types/DisplayOrders";
import { ReplicatedStorageTree } from "shared/types/ReplicatedStorageTree";
import { TopbarOffset } from "../topbaroffset";
import { Pattern } from "./pattern";
import { Viewport } from "./viewport";

interface Props {}

class SelectTeamGui extends Roact.Component<Props> {
	centerLineBinding = Roact.createBinding(0);
	leftPageBinding = Roact.createBinding(0);
	rightPageBinding = Roact.createBinding(0);
	leftCameraRef = Roact.createRef<Camera>();
	rightCameraRef = Roact.createRef<Camera>();
	/*
	Stores are too hard lol
	store = new Rodux.Store<{}, Action<"Yes">>((state, action) => {
		return state;
	});

	*/
	state = { centerLocation: 0.5 };
	didMount() {
		this.leftCameraRef.getValue()!.CFrame = CFrame.Angles(0, math.rad(-20), 0).mul(new CFrame(0, 0, 5));
		//this.leftCameraRef.getValue()!.CFrame = new CFrame(new Vector3(0, 0, -10), new Vector3(0, 0, 0));
		this.rightCameraRef.getValue()!.CFrame = CFrame.Angles(0, math.rad(-20), 0).mul(new CFrame(0, 0, 5));
	}
	render() {
		return (
			<screengui Key="SelectTeamGui" DisplayOrder={DisplayOrder.SelectTeamGui}>
				<TopbarOffset>
					<frame
						Key="ScreenLeft"
						Size={new UDim2(0.5, 0, 1, 0)}
						BackgroundColor3={Color3.fromRGB(255, 255, 140)}
						AnchorPoint={this.leftPageBinding[0].map((step) => new Vector2(1 - step, 0))}
						BorderSizePixel={0}
					>
						<Pattern />

						<Viewport
							AnchorPoint={new Vector2(0.5, 0.5)}
							Size={new UDim2(0.7, 0, 0.7, 0)}
							Position={new UDim2(0.5, 0, 0.4, 0)}
							Model={(ReplicatedStorage as ReplicatedStorageTree).Models.Human}
							CameraRef={this.leftCameraRef}
						/>

						<textbutton Key="PlayButton" Text="Play" />
					</frame>
					<frame
						Key="ScreenRight"
						Size={new UDim2(0.5, 0, 1, 0)}
						BackgroundColor3={Color3.fromRGB(105, 152, 83)}
						Position={this.rightPageBinding[0].map((step) => new UDim2(1 - step / 2, 0, 0, 0))}
						BorderSizePixel={0}
					>
						<Pattern />
						<Viewport
							AnchorPoint={new Vector2(0.5, 0.5)}
							Size={new UDim2(0.7, 0, 0.7, 0)}
							Position={new UDim2(0.5, 0, 0.4, 0)}
							Model={(ReplicatedStorage as ReplicatedStorageTree).Models.BasedTurtles}
							CameraRef={this.rightCameraRef}
						/>
					</frame>
					<frame
						Key="CenterLine"
						Size={new UDim2(0, 50, 1, 0)}
						BorderSizePixel={0}
						BackgroundColor3={new Color3(1, 1, 1)}
						AnchorPoint={new Vector2(0.5, 0.5)}
						Position={this.centerLineBinding[0].map((step) => {
							return new UDim2(0.5, 0, 1.5 - math.min(1, step * 2), 0);
						})}
						Rotation={this.centerLineBinding[0].map((step) => {
							return step * 3;
						})}
						ZIndex={2}
					></frame>
					<textbutton
						Key="PlayButton"
						BackgroundColor3={Color3.fromRGB(79, 197, 103)}
						Font={Enum.Font.SourceSans}
						AnchorPoint={new Vector2(0.5, 0.5)}
						Position={this.centerLineBinding[0].map((step) => new UDim2(0.5, 0, 0.7 + step / 2, 0))}
						Size={new UDim2(0.5, 0, 0.1, 0)}
						Text={"Play"}
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={40}
						TextWrapped={true}
						Event={{
							MouseButton1Click: () => {
								Animate(this.centerLineBinding[1], 1);
								wait(0.7);
								Animate(this.rightPageBinding[1], 0.7);
								wait(0.5);
								Animate(this.leftPageBinding[1], 0.7);
							},
						}}
					>
						<uiaspectratioconstraint AspectRatio={15} />
						<uicorner CornerRadius={new UDim(0.06, 0)} />
						<uigradient
							Color={new ColorSequence(Color3.fromRGB(141, 141, 141), Color3.fromRGB(255, 255, 255))}
							Rotation={90}
						/>
					</textbutton>
				</TopbarOffset>
			</screengui>
		);
	}
}
export { SelectTeamGui };
