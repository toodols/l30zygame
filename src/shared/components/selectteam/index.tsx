//roact
import Roact from "@rbxts/roact";
import { Animate } from "shared/Modules/util";
import { DisplayOrder } from "shared/types/DisplayOrders";
import { Pattern } from "./pattern";
interface Props {}

class SelectTeamGui extends Roact.Component<Props> {
	centerLineBinding = Roact.createBinding(0);
	leftPageBinding = Roact.createBinding(0);
	rightPageBinding = Roact.createBinding(0);
	render() {
		return (
			<screengui Key="SelectTeamGui" DisplayOrder={DisplayOrder.SelectTeamGui}>
				<frame
					Key="ScreenLeft"
					Size={new UDim2(0.5, 0, 1, 0)}
					AnchorPoint={this.leftPageBinding[0].map((step) => new Vector2(1 - step, 0))}
				></frame>
				<frame
					Key="ScreenRight"
					Size={new UDim2(0.5, 0, 1, 0)}
					Position={this.rightPageBinding[0].map((step) => new UDim2(1 - step / 2, 0, 0, 0))}
				></frame>
				<textbutton
					Key="PlayButton"
					BackgroundColor3={Color3.fromRGB(79, 197, 103)}
					Font={Enum.Font.SourceSans}
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={this.centerLineBinding[0].map((value) => new UDim2(0.5, 0, 0.7 + value / 2, 0))}
					Size={new UDim2(0.5, 0, 0.1, 0)}
					Text={"Play"}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextSize={40}
					TextWrapped={true}
					Event={{
						MouseButton1Click: () => {
							Animate(this.centerLineBinding[1], 0.5);
							wait(0.5);
							Animate(this.leftPageBinding[1], 0.5);
							wait(0.5);
							Animate(this.rightPageBinding[1], 0.5);
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
			</screengui>
		);
	}
}
export { SelectTeamGui };
