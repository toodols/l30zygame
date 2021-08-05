import Roact from "@rbxts/roact";
import { Players } from "@rbxts/services";
import { SelectTeamGui } from "shared/components/selectteam";
Roact.mount(
	<>
		<SelectTeamGui />
	</>,
	Players.LocalPlayer.WaitForChild("PlayerGui"),
);
