import Roact from "@rbxts/roact";
import { Players, UserInputService } from "@rbxts/services";
import { PlayerDisplay } from "shared/components/playerdisplay";
import { SelectTeamGui } from "shared/components/selectteam";

const Player = Players.LocalPlayer;

UserInputService.InputBegan.Connect((input, gameProcessed) => {
	if (!gameProcessed) {
		if (input.KeyCode === Enum.KeyCode.LeftShift) {
			const humanoid = Player.Character?.FindFirstChildOfClass("Humanoid");
			if (humanoid) {
				humanoid.WalkSpeed = 24;
			}
		}
	}
});

UserInputService.InputEnded.Connect((input, gameProcessed) => {
	if (!gameProcessed) {
		if (input.KeyCode === Enum.KeyCode.LeftShift) {
			const humanoid = Player.Character?.FindFirstChildOfClass("Humanoid");
			if (humanoid) {
				humanoid.WalkSpeed = 16;
			}
		}
	}
});

Roact.mount(
	<>
		<SelectTeamGui />
		<PlayerDisplay />
	</>,
	Player.WaitForChild("PlayerGui"),
);
