import { Players } from "@rbxts/services";
import { $terrify } from "rbxts-transformer-t";
import { Remotes } from "shared/items";
import { TeamsTypes } from "shared/types/Teams";
import { PlayerStateManager } from "./playerstate";
import { sus } from "./sus";

function LoadCharacterAsType() {}

PlayerStateManager.init();

Players.PlayerAdded.Connect((player) => {
	function ListenForDeath(character: Model) {
		character.FindFirstChildOfClass("Humanoid")!.Died.Connect(() => {
			task.wait(3);
			player.LoadCharacter();
		});
	}
	player.CharacterAdded.Connect(ListenForDeath);
	player.LoadCharacter();
});

const teamTypesGuard = $terrify<TeamsTypes>();
Remotes.TeamSelected.OnServerEvent.Connect((player, team) => {
	if (!teamTypesGuard(team) || team === TeamsTypes.Lobby) sus(player, "TeamTypes failed");

	const playerState = PlayerStateManager.getPlayer(player);
	if (playerState.team === TeamsTypes.Lobby) {
		playerState.team = team;
		print("Load character as " + team);
	}
});

export {};
