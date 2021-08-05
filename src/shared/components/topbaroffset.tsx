import Roact from "@rbxts/roact";

function TopbarOffset(props: Roact.PropsWithChildren) {
	return <frame>{props[Roact.Children]}</frame>;
}

export { TopbarOffset };
