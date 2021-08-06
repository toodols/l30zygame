import Roact, { Ref } from "@rbxts/roact";
import { TweenService } from "@rbxts/services";
interface Props {
	Image: string;
	Position: UDim2;
	Color: Color3;
	Value: number;
	Type: "Health" | "Money";
}

class Display extends Roact.Component<Props> {
	animation?: Tween;
	ref = Roact.createRef<Frame>();
	lastValue = 100;
	constructor(props: Props) {
		super(props);
	}
	didMount() {
		this.animation = TweenService.Create(
			this.ref.getValue()!,
			new TweenInfo(1, Enum.EasingStyle.Elastic, Enum.EasingDirection.Out),
			{
				Rotation: 4,
			},
		);
	}
	didUpdate() {
		if (this.props.Value < this.lastValue) {
			this.shake();
		}
		this.lastValue = this.props.Value;
	}
	shake() {
		this.ref.getValue()!.Rotation = -4;
		this.animation?.Cancel();
		this.animation?.Play();
	}
	render() {
		return (
			<frame
				BackgroundTransparency={1}
				Position={this.props.Position}
				Rotation={4}
				Ref={this.ref}
				Size={new UDim2(0.179, 0, 0.044, 0)}
			>
				<frame
					BackgroundColor3={Color3.fromRGB(0, 0, 0)}
					BackgroundTransparency={0.45}
					Position={new UDim2(0.004, 0, -0.059, 0)}
					Size={new UDim2(1.024, 0, 1.108, 0)}
				>
					<uicorner CornerRadius={new UDim(0, 3)} />
					<textlabel
						BackgroundTransparency={1}
						Font={Enum.Font.SourceSans}
						RichText={true}
						Size={new UDim2(1, 0, 1, 0)}
						Text={tostring(this.props.Value)}
						TextColor3={this.props.Color}
						TextSize={35}
						TextWrapped={true}
					>
						<uiaspectratioconstraint AspectRatio={5.22} />
					</textlabel>
					<uiaspectratioconstraint AspectRatio={5.22} />
				</frame>
				<imagelabel
					AutomaticSize={Enum.AutomaticSize.X}
					BackgroundTransparency={1}
					Image={this.props.Image}
					Position={new UDim2(-0.165, 0, -0.974, 0)}
					Size={new UDim2(0.411, 0, 2.486, 0)}
					ZIndex={2}
				>
					<uiaspectratioconstraint AspectRatio={0.935} />
				</imagelabel>
				<uiaspectratioconstraint AspectRatio={5.649} />
			</frame>
		);
	}
}
export { Display };
