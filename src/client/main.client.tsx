import Roact from "@rbxts/roact";
import { Players, UserInputService, Workspace } from "@rbxts/services";
import { PlayerDisplay } from "shared/components/playerdisplay";
import { SelectTeamGui } from "shared/components/selectteam";

const controls = (
	require(Players.LocalPlayer.WaitForChild("PlayerScripts")!.WaitForChild(
		"PlayerModule",
	)! as unknown as ModuleScript) as { GetControls(): { Enable(): void; Disable(): void } }
).GetControls();

controls.Disable();

const Player = Players.LocalPlayer;
let SelectTeamGuiInst: SelectTeamGui;

UserInputService.InputBegan.Connect((input, gameProcessed) => {
	if (!gameProcessed) {
		if (input.KeyCode === Enum.KeyCode.LeftShift) {
			const humanoid = Player.Character?.FindFirstChildOfClass("Humanoid");
			if (humanoid) {
				humanoid.WalkSpeed = 24;
			}
		}
	}
});

UserInputService.InputEnded.Connect((input, gameProcessed) => {
	if (!gameProcessed) {
		if (input.KeyCode === Enum.KeyCode.LeftShift) {
			const humanoid = Player.Character?.FindFirstChildOfClass("Humanoid");
			if (humanoid) {
				humanoid.WalkSpeed = 16;
			}
		}
	}
});

Player.CharacterAdded.Connect(() => {
	Workspace.CurrentCamera!.CameraType = Enum.CameraType.Custom;
});

const Lobby = Workspace.Game.Lobby;
interface PodContainer extends Model {
	Pod_Hitbox: BasePart;
	Floor_Right: BasePart;
	Floor_Left: BasePart;
	Pod: Model & {
		door: Model;
		Seat: Model & {
			Body: BasePart;
		};
	};
	TopDownCam: BasePart;
	Connections: Model;
}
for (const pod of Lobby.Pods.GetChildren() as PodContainer[]) {
	let canDrop = true;
	pod.Pod_Hitbox.Touched.Connect((hit) => {
		if (canDrop && Player.Character && hit.IsDescendantOf(Player.Character)) {
			controls.Disable();
			canDrop = false;
			const cam = Workspace.CurrentCamera!;
			cam.CameraType = Enum.CameraType.Scriptable;

			cam.CFrame = pod.TopDownCam.CFrame;

			const originalDoorPivot = pod.Pod.door.GetPivot();
			for (let i = 0; i < 90; i++) {
				pod.Pod.door.PivotTo(pod.Pod.door.GetPivot().mul(CFrame.Angles(0, 0, math.rad(1))));
				task.wait();
			}

			const humanoid = Player.Character.FindFirstChildOfClass("Humanoid")!;
			humanoid.MoveTo(pod.Pod.Seat.Body.Position);
			humanoid.MoveToFinished.Wait();

			const originalFloorLeftPivot = pod.Floor_Left.GetPivot();
			const originalFloorRightPivot = pod.Floor_Right.GetPivot();
			for (let i = 0; i < 100; i++) {
				pod.Floor_Left.CFrame = pod.Floor_Left.CFrame.mul(new CFrame(0, 0, -0.1));
				pod.Floor_Right.CFrame = pod.Floor_Right.CFrame.mul(new CFrame(0, 0, 0.1));
				task.wait();
			}

			cam.CFrame = pod.Pod_Hitbox.CFrame.mul(new CFrame(0, -10, 5));

			pod.Connections.GetChildren().forEach((part) => {
				(part as BasePart).Transparency = 1;
			});

			pod.Pod.door.PivotTo(originalDoorPivot);

			const originalPodPivot = pod.Pod.GetPivot();
			for (let i = 0; i < 100; i++) {
				pod.Pod.PivotTo(pod.Pod.GetPivot().sub(new Vector3(0, (i * i) / 400, 0)));
				cam.CFrame = new CFrame(cam.CFrame.Position, pod.Pod.GetPivot().Position);
				task.wait();
			}

			SelectTeamGuiInst.showPlayButton();

			pod.Floor_Left.PivotTo(originalFloorLeftPivot);
			pod.Floor_Right.PivotTo(originalFloorRightPivot);
			pod.Pod.PivotTo(originalPodPivot);

			controls.Enable();
		}
	});
}

Roact.mount(
	<>
		<SelectTeamGui ref={(v) => (SelectTeamGuiInst = v)} />
		<PlayerDisplay />
	</>,
	Player.WaitForChild("PlayerGui"),
);
