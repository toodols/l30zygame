import Roact from "@rbxts/roact";
import { RunService, TweenService } from "@rbxts/services";

type NumericBinding = LuaTuple<[Roact.Binding<number>, (newValue: number) => void]>;

const Animated: Map<NumericBinding, RBXScriptConnection> = new Map();

function LerpNumber(start: number, endValue: number, alpha: number) {
	return start + (endValue - start) * alpha;
}

function AnimateBinding(
	binding: NumericBinding,
	to = 1,
	time = 0.5,
	easingStyle: CastsToEnum<Enum.EasingStyle> = Enum.EasingStyle.Quad,
	easingDirection: CastsToEnum<Enum.EasingDirection> = Enum.EasingDirection.Out,
) {
	Animated.get(binding)?.Disconnect();
	const start = tick();
	const initial = binding[0].getValue();
	const connection = RunService.RenderStepped.Connect(() => {
		const alpha = (tick() - start) / time;

		binding[1](LerpNumber(initial, to, TweenService.GetValue(alpha, easingStyle, easingDirection)));
		if (alpha > 1) {
			connection.Disconnect();
		}
	});
	Animated.set(binding, connection);
}

export { AnimateBinding };
