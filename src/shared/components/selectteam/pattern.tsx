import Roact from "@rbxts/roact";
import { RunService, TweenService } from "@rbxts/services";

interface Props {
	Image?: string;
	TileSize?: UDim2;
	LoopTime?: number;
	Direction?: UDim2;
}

class Pattern extends Roact.Component<Props> {
	ref = Roact.createRef<ImageLabel>();
	didMount() {
		const label = this.ref.getValue()!;
		TweenService.Create(
			label,
			new TweenInfo(this.props.LoopTime || 5, Enum.EasingStyle.Linear, Enum.EasingDirection.Out, math.huge),
			{
				Position: new UDim2(0, 0, 0, 0),
			},
		).Play();
	}
	render() {
		const tileSize = this.props.TileSize || new UDim2(0, 96, 0, 96);
		return (
			<frame
				Size={new UDim2(1, 0, 1, 0)}
				BackgroundTransparency={1}
				ClipsDescendants={true}
				Key={"PatternClipper"}
			>
				<imagelabel
					Key="Pattern"
					BackgroundTransparency={1}
					Ref={this.ref}
					ImageTransparency={0.9}
					Image={this.props.Image || "rbxassetid://121480522"}
					ScaleType={Enum.ScaleType.Tile}
					TileSize={this.props.TileSize || new UDim2(0, 96, 0, 96)}
					Position={new UDim2().sub(this.props.Direction || tileSize)}
					Size={new UDim2(1, 0, 1, 0).add(tileSize)}
				/>
			</frame>
		);
	}
}
export { Pattern };
