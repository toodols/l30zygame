import Roact from "@rbxts/roact";

function TopbarOffset(props: Roact.PropsWithChildren) {
	return (
		<frame
			Key="TopbarOffset"
			Position={new UDim2(0, 0, 0, -35)}
			BackgroundTransparency={1}
			Size={new UDim2(1, 0, 1, 35)}
		>
			{props[Roact.Children]}
		</frame>
	);
}

export { TopbarOffset };
