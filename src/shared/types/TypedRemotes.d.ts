type Callback = (...args: Array<any>) => any;
interface TypedRemoteEventProps<C extends Callback> {
	//FireAllClients(...args: Parameters<C>): void;
	//FireClient(client: Player, ...args: Parameters<C>): void;
	//OnClientEvent: RBXScriptSignal<(...args: Parameters<C>) => void>;

	//FireServer(...args: Parameters<C>): void;
	OnServerEvent: RBXScriptSignal<(client: Player, ...args: Parameters<C>) => void>;
}

interface TypedRemoteFunctionProps<C extends Callback> {
	InvokeServer(...args: Parameters<C>): ReturnType<Callback>;

	OnServerInvoke: (client: Player, ...args: Parameters<C>) => void;
	//OnClientInvoke: C;
}

type TypedRemoteEvent<C extends Callback> = TypedRemoteEventProps<C> & RemoteEvent<C>;
type TypedRemoteFunction<C extends Callback> = TypedRemoteFunctionProps<C> & Omit<RemoteFunction<C>, "OnServerInvoke">;
export type { TypedRemoteEvent, TypedRemoteFunction };
