import Roact, { Binding } from "@rbxts/roact";
import { RunService, UserInputService } from "@rbxts/services";
import { ToolButton } from "./tool";

const inputs = {
	One: 1,
	Two: 2,
	Three: 3,
	Four: 4,
	Five: 5,
	Six: 6,
	Seven: 7,
	Eight: 8,
	Nine: 9,
	Zero: 10,
};

export class InventoryTool {
	// destroys this tool; all associated
	destroyedEvent = new Instance("BindableEvent");
	destroy() {
		this.destroyedEvent.Fire();
	}
	constructor(public display: string) {}
}

interface HotbarProps {
	objects: InventoryTool[];
}

export class Hotbar extends Roact.Component<HotbarProps> {
	switchTo(num: number) {
		this.setState({ selected: num });
	}
	state: { selected: number | undefined } = { selected: undefined };
	render() {
		return (
			<frame
				BackgroundTransparency={1}
				Size={new UDim2(1, 0, 0.2, 0)}
				AnchorPoint={new Vector2(0.5, 1)}
				Position={new UDim2(0.5, 0, 1, 0)}
				Active={false}
			>
				<uiaspectratioconstraint DominantAxis={"Height"} AspectRatio={10} />
				{this.props.objects.map((val, i) => {
					return (
						<ToolButton
							tool={val}
							position={i}
							selected={this.state.selected === i}
							hotbarItemsCount={this.props.objects.size()}
							select={() => {
								this.setState({ selected: i });
							}}
						/>
					);
				})}
			</frame>
		);
	}
	didMount() {
		UserInputService.InputBegan.Connect((input, gameProcessed) => {
			if (!gameProcessed) {
				if (input.KeyCode.Name in inputs) {
				}
			}
		});
	}
}
