import Roact, { createRef } from "@rbxts/roact";

interface Props {
	Model: Model;
	CameraRef?: Roact.Ref<Camera>;
}
class Viewport extends Roact.Component<Props> {
	ref = createRef<ViewportFrame>();
	currentModel?: Model;
	lastProps: Roact.PropsWithChildren<Props> = {} as Roact.PropsWithChildren<Props>;
	didMount() {
		this.ref.getValue()!.CurrentCamera = this.props.CameraRef?.getValue();
		this.didUpdate();
	}

	didUpdate() {
		if (this.lastProps.Model !== this.props.Model) {
			this.currentModel?.Destroy(); //destroy the current model
			const viewport = this.ref.getValue()!;
			const model = this.props.Model.Clone();
			this.currentModel = model;
			model.PivotTo(new CFrame());
			model.Parent = viewport;
		}
		this.lastProps = this.props;
	}
	constructor(props: Props) {
		super(props);
		//this.lastProps = props;
	}
	render() {
		return (
			<viewportframe Key="Viewport" BackgroundTransparency={1} Ref={this.ref} Size={new UDim2(1, 0, 1, 0)}>
				<camera Ref={this.props.CameraRef} />
			</viewportframe>
		);
	}
}

export { Viewport };
