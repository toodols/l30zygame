import { Players } from "@rbxts/services";
import { Remotes } from "shared/items";

Players.PlayerAdded.Connect((player) => {
	player.LoadCharacter();
});

Remotes.TeamSelected.OnServerEvent.Connect((player, team) => {});

export {};
