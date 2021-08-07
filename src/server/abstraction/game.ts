/*
    Abstractifies the game so that no :FindFirstChild()-like calls will be necessary
*/

import { ServerStorage, Workspace } from "@rbxts/services";
import { PlayerStateManager } from "server/abstraction/playerstate";
import { ServerModels } from "server/items";
import { TeamsTypes } from "shared/types/Teams";
import { PlayingTeamObject, TeamObject } from "./team";

class Game {
	instance: Instance;
	teams: { lobby: TeamObject; human: PlayingTeamObject; zombie: PlayingTeamObject };

	loadPlayerCharacter(player: Player) {
		const playerObj = PlayerStateManager.getPlayer(player);
		const team = playerObj.team;
		const teamObj = this.teams[team];
		const spawnPos = teamObj.getRandomSpawn();
		if (team === TeamsTypes.Lobby) {
			player.LoadCharacter();
			player.Character!.PivotTo(spawnPos);
		} else {
			const charModel = ServerModels.CharacterTypes[playerObj.charactertype].Clone();
			charModel.Name = player.Name;
			charModel.PivotTo(spawnPos);
			player.Character = charModel;
			charModel.Parent = Workspace; //originally wanted to put in a separate container but eh whatever
		}
	}

	constructor(instance: Instance) {
		this.instance = instance;
		this.teams = {
			lobby: new TeamObject(instance.FindFirstChild("Lobby")!),
			human: new PlayingTeamObject(instance.FindFirstChild("Human")!),
			zombie: new PlayingTeamObject(instance.FindFirstChild("Zombie")!),
		};
	}
}

export { Game };
