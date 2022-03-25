import { ServerStorage } from "@rbxts/services";
import { CharacterTypes } from "shared/types/charactertypes";

const ServerModels = ServerStorage.FindFirstChild("Models") as Folder & {
	CharacterTypes: Folder & {
		[k in CharacterTypes]: Model;
	};
};
export { ServerModels };
