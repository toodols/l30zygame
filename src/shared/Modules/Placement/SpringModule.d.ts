declare class spring {
	Target: Vector3;
	Position: Vector3;
	Velocity: Vector3;

	Mass: number;
	Force: number;
	Damping: number;
	Speed: number;

	shove(force: Vector3): void;
	update(dt: number): Vector3;
}
declare const _default: { create: () => spring };
export default _default;
