import { RunService, TweenService } from "@rbxts/services";

function Animate(
	update: (newValue: number) => void,
	time = 0.5,
	easingStyle: CastsToEnum<Enum.EasingStyle> = Enum.EasingStyle.Quad,
	easingDirection: CastsToEnum<Enum.EasingDirection> = Enum.EasingDirection.Out,

	finished = () => {},
) {
	const start = tick();
	const connection = RunService.RenderStepped.Connect(() => {
		const alpha = (tick() - start) / time;
		update(TweenService.GetValue(alpha, easingStyle, easingDirection));
		if (alpha > 1) {
			connection.Disconnect();
			if (finished) finished();
		}
	});

	return;
}

export { Animate };
