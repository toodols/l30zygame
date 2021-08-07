/*
	Lobby, Human, Zombie
*/
class TeamObject {
	instance: Instance;
	spawns: CFrame[];
	getRandomSpawn() {
		//for real tho wish rbxts would just smart combine x - 1 + 1 to just x
		return this.spawns[math.random(0, this.spawns.size() - 1)];
	}
	constructor(instance: Instance) {
		this.instance = instance;
		const spawnFolder = instance.FindFirstChild("Spawns")!;
		this.spawns = spawnFolder.GetChildren().map((part: Instance) => {
			if (!part.IsA("BasePart")) error(`${part.GetFullName()} is not a BasePart, please remove.`);
			return part.CFrame.add(new Vector3(0, 4, 0));
		});

		spawnFolder.Destroy(); //and you, have outlived your purpose
	}
}

/*
	Human, Zombie
*/
class PlayingTeamObject extends TeamObject {
	constructor(instance: Instance) {
		super(instance);
	}
}

export { TeamObject, PlayingTeamObject };
