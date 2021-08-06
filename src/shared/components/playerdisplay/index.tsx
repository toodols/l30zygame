import Roact from "@rbxts/roact";
import { Players } from "@rbxts/services";
import { DisplayOrder } from "shared/types/DisplayOrders";
import { Display } from "./display";
import { HurtDisplay } from "./hurt";

class PlayerDisplay extends Roact.Component {
	constructor(props: {}) {
		super(props);

		const OnCharacter = (character: Model) => {
			const humanoid = character.WaitForChild("Humanoid") as Humanoid;
			humanoid.GetPropertyChangedSignal("Health").Connect(() => {
				this.setState({ ...this.state, health: math.floor(humanoid.Health) });
			});
		};
		if (Players.LocalPlayer.Character) {
			OnCharacter(Players.LocalPlayer.Character);
		}
		Players.LocalPlayer.CharacterAdded.Connect(OnCharacter);
	}
	state = { health: 100, money: 100 };
	render() {
		return (
			<>
				<screengui
					Key="Display"
					ZIndexBehavior={Enum.ZIndexBehavior.Sibling}
					DisplayOrder={DisplayOrder.DisplayGui}
				>
					<HurtDisplay Health={this.state.health} />
					<Display
						Type="Health" //specifies the effect type
						Position={new UDim2(0.03, 0, 0.75, 0)}
						Image="rbxassetid://3738300868"
						Color={Color3.fromRGB(137, 222, 100)}
						Value={this.state.health}
					/>
					<Display
						Type="Money"
						Position={new UDim2(0.03, 0, 0.831, 0)}
						Image="rbxassetid://1529741948"
						Color={Color3.fromRGB(222, 196, 89)}
						Value={this.state.money}
					/>
				</screengui>
			</>
		);
	}
}

export { PlayerDisplay };
