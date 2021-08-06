//alr
import { ReplicatedStorage, Workspace } from "@rbxts/services";
import { Remotes } from "../shared/items";

function Init() {
	const remote = Remotes.Place;
	const req = Remotes.RequestPlacing;
	const deb = new Map<Player, boolean>();
	const placing = new Map<Player, boolean>();

	remote.OnServerEvent.Connect((plr, placetype, data) => {
		if (placetype === "Place") {
			if (!deb.has(plr)) {
				deb.set(plr, true);
				data[0].SetPrimaryPartCFrame(data[1]);
				placing.set(plr, false);
				wait(1);
				deb.set(plr, false);
			}
		}
	});

	req.OnServerInvoke = (plr, objecto) => {
		let objj: Model;
		if (!placing.has(plr)) {
			placing.set(plr, true);
			objj = objecto.Clone();
			objj.MoveTo(new Vector3(1000, -200, 1000));
			objj.Parent = Workspace;
			const primary = new Instance("Part");
			primary.Size = new Vector3(0, 0, 0);
			primary.Transparency = 1;
			primary.Anchored = true;
			primary.Parent = objj;
			objj.PrimaryPart = primary;
		}
		return objj!;
	};
}
export { Init };
