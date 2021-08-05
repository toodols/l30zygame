import { TypedRemoteEventProps, TypedRemoteFunctionProps } from "./TypedRemotes";

interface ReplicatedStorageTree extends ReplicatedStorage {
	Remotes: Folder & {
		RequestPlacing: TypedRemoteFunctionProps<(objectto: Model) => void> & Omit<RemoteFunction, "OnServerInvoke">;
		Place: TypedRemoteEventProps<(type: "Place", data: [Model, CFrame]) => void> & RemoteEvent;
	};
}

export type { ReplicatedStorageTree };
