import { Players, Workspace } from "@rbxts/services";
import { Remotes } from "shared/items";
import { CharacterTypes } from "shared/types/charactertypes";
import { TeamsTypes } from "shared/types/Teams";
import { Game } from "./abstraction/game";
import { disablePlayerCollisions } from "./playercollisions";
import { PlayerStateManager } from "./abstraction/playerstate";
import { sus } from "./sus";

const gameObj = new Game(Workspace.FindFirstChild("Game")!);

Players.PlayerAdded.Connect((player) => {
	disablePlayerCollisions(player);
	function ListenForDeath(character: Model) {
		character.FindFirstChildOfClass("Humanoid")!.Died.Connect(() => {
			task.wait(3);
			gameObj.loadPlayerCharacter(player);
		});
	}
	player.CharacterAdded.Connect(ListenForDeath);
	gameObj.loadPlayerCharacter(player);
});

//for some retarded FUCKING reason, connections registered AFTER another gets fired BEFORE the latter, great job roblox, you pissed me off
PlayerStateManager.init();

// const teamTypesGuard = $terrify<TeamsTypes>();
Remotes.TeamSelected.OnServerEvent.Connect((player, team) => {
	if (/*!teamTypesGuard(team) || */ team === TeamsTypes.Lobby) sus(player, "TeamTypes failed");

	const playerState = PlayerStateManager.getPlayer(player);
	if (playerState.team === TeamsTypes.Lobby) {
		playerState.team = team;
		if (team === TeamsTypes.Blue) playerState.charactertype = "BlueDefault";
		else if (team === TeamsTypes.Red) playerState.charactertype = "RedDefault";
		gameObj.loadPlayerCharacter(player);
	}
});

export {};
