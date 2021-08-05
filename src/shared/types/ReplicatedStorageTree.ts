import { TypedRemoteEventProps, TypedRemoteFunctionProps } from "./TypedRemotes";

interface ReplicatedStorageTree extends ReplicatedStorage {
	Remotes: Folder & {
		RequestPlacing: TypedRemoteFunctionProps<(objectto: Model) => void> & Omit<RemoteFunction, "OnServerInvoke">;
		Place: TypedRemoteEventProps<(type: "Place", data: [Model, CFrame]) => void> & RemoteEvent;
	};
	Models: Folder & {
		BasedTurtles: Model;
		Human: Model;
	};
}

export type { ReplicatedStorageTree };
