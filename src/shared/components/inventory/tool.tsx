import Roact, { Binding } from "@rbxts/roact";
import { Players, RunService, TweenService, UserInputService } from "@rbxts/services";
import { InventoryTool } from ".";

const mouse = Players.LocalPlayer.GetMouse();

interface ToolButtonProps {
	selected: boolean;
	position: number;
	hotbarItemsCount: number;
	tool: InventoryTool;
	select: () => void;
}

// manages everything pertaining to dragging. When not dragging, the position is free to be set by other parts of the component;
function dragManager(ref: Roact.Ref<GuiObject>) {
	let dragging = false;
	let dragStart: Vector3;
	let containerStart: UDim2;
	let dragInput: InputObject;

	const inputChangedConnection = UserInputService.InputChanged.Connect((input) => {
		if (input === dragInput && dragging) {
			const delta = input.Position.sub(dragStart);
			ref.getValue()!.Position = new UDim2(0, delta.X, 0, delta.Y).add(containerStart);
		}
	});

	return {
		inputChangedConnection,
		isDetached: () => {
			return dragging;
		},
		props: {
			[Roact.Event.InputBegan]: (_gui: unknown, input: InputObject) => {
				if (
					input.UserInputType === Enum.UserInputType.MouseButton1 ||
					input.UserInputType === Enum.UserInputType.Touch
				) {
					dragging = true;
					dragStart = input.Position;
					containerStart = ref.getValue()!.Position;
					input.GetPropertyChangedSignal("UserInputState").Connect(() => {
						if (input.UserInputState === Enum.UserInputState.End) {
							if (dragging) {
								RunService.Heartbeat.Wait();
								dragging = false;
							}
						}
					});
				}
			},
			[Roact.Event.InputChanged]: (gui: unknown, input: InputObject) => {
				if (
					input.UserInputType === Enum.UserInputType.MouseMovement ||
					input.UserInputType === Enum.UserInputType.Touch
				) {
					dragInput = input;
				}
			},
		},
	};
}

export class ToolButton extends Roact.Component<ToolButtonProps> {
	ref = Roact.createRef<TextButton>();
	calculatePosition() {
		const shift = -this.props.hotbarItemsCount / 2 + this.props.position - 1;

		return new UDim2(0.5, shift * this.ref.getValue()!.AbsoluteSize.X, 0, 0);
	}
	didMount() {
		this.animation = TweenService.Create(this.ref.getValue()!, new TweenInfo(0.5), {
			Position: this.calculatePosition(),
		});
		this.animation.Play();
	}
	willUnmount() {
		this.dragManager.inputChangedConnection.Disconnect();
	}
	dragManager = dragManager(this.ref);
	animation?: Tween;
	oldProps: ToolButtonProps = this.props;
	didUpdate() {
		if (!this.dragManager.isDetached() && this.props.position !== this.oldProps.position) {
			this.animation = TweenService.Create(this.ref.getValue()!, new TweenInfo(0.5), {
				Position: this.calculatePosition(),
			});
			this.animation.Play();
		}
		this.oldProps = this.props;
	}
	render() {
		return (
			<textbutton Ref={this.ref} Size={new UDim2(1, 0, 1, 0)} Text="My Tool" {...this.dragManager.props}>
				<uiaspectratioconstraint AspectRatio={1} />
				<uicorner CornerRadius={new UDim(0, 5)} />
			</textbutton>
		);
	}
}
