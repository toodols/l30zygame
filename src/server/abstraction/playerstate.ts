// Minimize client access to information by restricting even the teams of current players.

import { Players } from "@rbxts/services";
import { CharacterTypes } from "shared/types/charactertypes";
import { TeamsTypes } from "shared/types/Teams";

namespace PlayerStateManager {
	class PlayerState {
		static serializable = ["money"];
		charactertype: CharacterTypes = "Unknown";
		team = TeamsTypes.Lobby;
		money = 0;
		private player: Player;
		constructor(player: Player) {
			this.player = player;
		}
	}
	const PlayersMap = new Map<Player, PlayerState>();

	export function getPlayer(Player: Player) {
		return PlayersMap.get(Player)!;
	}
	export function init() {
		Players.PlayerAdded.Connect((player) => {
			PlayersMap.set(player, new PlayerState(player));
		});
		Players.PlayerRemoving.Connect((player: Player) => {
			PlayersMap.delete(player);
		});
	}
}

export { PlayerStateManager };
