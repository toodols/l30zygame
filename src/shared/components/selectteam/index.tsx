//roact
import Roact from "@rbxts/roact";
function SelectTeamGui() {
	return (
		<screengui Key="SelectTeamGui">
			<textbutton BackgroundColor3={Color3.fromRGB(79, 197, 103)}>
				<uicorner CornerRadius={new UDim(0.06, 0)} />
				<uigradient
					Color={new ColorSequence(Color3.fromRGB(141, 141, 141), Color3.fromRGB(255, 255, 255))}
					Rotation={90}
				/>
			</textbutton>
		</screengui>
	);
}
export { SelectTeamGui };
