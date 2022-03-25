import { ReplicatedStorage } from "@rbxts/services";
import { TeamsTypes } from "./types/Teams";
import { TypedRemoteEvent, TypedRemoteFunction } from "./types/TypedRemotes";

ReplicatedStorage.WaitForChild("Remotes").WaitForChild("Place");

const Remotes = ReplicatedStorage.FindFirstChild("Remotes") as Folder & {
	RequestPlacing: TypedRemoteFunction<(objectto: Model) => void>;
	Place: TypedRemoteEvent<(type: "Place", data: [Model, CFrame]) => void>;
	TeamSelected: TypedRemoteEvent<(team: TeamsTypes) => void>;
};

const Models = ReplicatedStorage.FindFirstChild("Models") as Folder & {
	Red: Model;
	Blue: Model;
};

export { Remotes, Models };
