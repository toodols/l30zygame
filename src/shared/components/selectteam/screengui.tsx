import Roact from "@rbxts/roact";

export default (
	<screengui Enabled={false} ZIndexBehavior={Enum.ZIndexBehavior.Sibling}>
		<frame
			Key="carry"
			BackgroundTransparency={1}
			Position={new UDim2(-0.126, 0, -0.122, 0)}
			Size={new UDim2(1.095, 0, 1.207, 0)}
		>
			<frame
				Key="human side"
				BackgroundColor3={Color3.fromRGB(255, 255, 140)}
				BorderSizePixel={0}
				ClipsDescendants={true}
				Position={new UDim2(0.067, -600, 0, 0)}
				Size={new UDim2(0.477, 0, 1.01, 0)}
			>
				<textbutton
					Key="Play"
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					Font={Enum.Font.SourceSans}
					Position={new UDim2(-0.023, 0, 0.747, 0)}
					Size={new UDim2(0.916, 0, 0.068, 0)}
					Text={""}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextSize={56}
					TextWrapped={true}
					ZIndex={2}
				>
					<textlabel
						BackgroundTransparency={1}
						Font={Enum.Font.SourceSans}
						Position={new UDim2(0.578, 0, 0.113, 0)}
						Size={new UDim2(0.422, 0, 0.686, 0)}
						Text="Play as Human"
						TextColor3={Color3.fromRGB(0, 0, 0)}
						TextScaled={true}
						TextSize={14}
						TextWrapped={true}
					/>
					<uicorner CornerRadius={new UDim(0.06, 0)} />
					<uigradient
						Rotation={-90}
						Transparency={
							new NumberSequence([
								new NumberSequenceKeypoint(0, 1, 0),
								new NumberSequenceKeypoint(0.112, 0.658, 0),
								new NumberSequenceKeypoint(0.484, 0.253, 0),
								new NumberSequenceKeypoint(1, 0, 0),
							])
						}
					/>
				</textbutton>
				<imagelabel
					Key="Pattern"
					BackgroundTransparency={1}
					Image="rbxassetid://121480522"
					ImageTransparency={0.9}
					Position={new UDim2(-0.235, 0, -0.128, 0)}
					ScaleType={Enum.ScaleType.Tile}
					Size={new UDim2(1.586, 0, 1.118, 0)}
					SliceCenter={new Rect(0, 256, 0, 256)}
					TileSize={new UDim2(0, 95, 0, 95)}
				/>
			</frame>
			<frame
				Key="zombie side"
				BackgroundColor3={Color3.fromRGB(105, 152, 83)}
				ClipsDescendants={true}
				Position={new UDim2(0.566, 600, 0, 0)}
				Size={new UDim2(0.526, 0, 1.01, 0)}
			>
				<textbutton
					Key="Play"
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					Font={Enum.Font.SourceSans}
					Position={new UDim2(0.07, 0, 0.746, 0)}
					Size={new UDim2(0.826, 0, 0.068, 0)}
					Text={""}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextSize={56}
					TextWrapped={true}
					ZIndex={2}
				>
					<textlabel
						BackgroundTransparency={1}
						Font={Enum.Font.SourceSans}
						Position={new UDim2(0.015, 0, 0.127, 0)}
						Size={new UDim2(0.393, 0, 0.686, 0)}
						Text="Play as Zombie"
						TextColor3={Color3.fromRGB(0, 0, 0)}
						TextScaled={true}
						TextSize={14}
						TextWrapped={true}
					/>
					<uicorner CornerRadius={new UDim(0.06, 0)} />
					<uigradient
						Rotation={-90}
						Transparency={
							new NumberSequence([
								new NumberSequenceKeypoint(0, 1, 0),
								new NumberSequenceKeypoint(0.112, 0.658, 0),
								new NumberSequenceKeypoint(0.484, 0.253, 0),
								new NumberSequenceKeypoint(1, 0, 0),
							])
						}
					/>
				</textbutton>
				<imagelabel
					Key="Pattern"
					BackgroundTransparency={1}
					Image="rbxassetid://121480522"
					ImageTransparency={0.9}
					Position={new UDim2(-0.235, 0, -0.128, 0)}
					ScaleType={Enum.ScaleType.Tile}
					Size={new UDim2(1.586, 0, 1.118, 0)}
					SliceCenter={new Rect(0, 256, 0, 256)}
					TileSize={new UDim2(0, 95, 0, 95)}
				/>
			</frame>
			<frame
				Key="option"
				BackgroundColor3={Color3.fromRGB(255, 80, 74)}
				BorderSizePixel={0}
				ClipsDescendants={true}
				Position={new UDim2(-0.9, 0, 0.027, 0)}
				Size={new UDim2(0.962, 0, 0.955, 0)}
				ZIndex={3}
			>
				<textbutton
					Key="optionb1"
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					Font={Enum.Font.SourceSans}
					Position={new UDim2(-0.117, 0, 0.626, 0)}
					Size={new UDim2(0.404, 0, 0.068, 0)}
					Text={""}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextSize={56}
					TextWrapped={true}
					ZIndex={2}
				>
					<textlabel
						BackgroundTransparency={1}
						Font={Enum.Font.SourceSans}
						Position={new UDim2(0.578, 0, 0.113, 0)}
						Size={new UDim2(0.422, 0, 0.686, 0)}
						Text="Continue"
						TextColor3={Color3.fromRGB(0, 0, 0)}
						TextScaled={true}
						TextSize={14}
						TextWrapped={true}
					/>
					<uicorner CornerRadius={new UDim(0.06, 0)} />
					<uigradient
						Rotation={-90}
						Transparency={
							new NumberSequence([
								new NumberSequenceKeypoint(0, 1, 0),
								new NumberSequenceKeypoint(0.112, 0.658, 0),
								new NumberSequenceKeypoint(0.484, 0.253, 0),
								new NumberSequenceKeypoint(1, 0, 0),
							])
						}
					/>
				</textbutton>
				<imagelabel
					Key="Pattern"
					BackgroundTransparency={1}
					Image="rbxassetid://7201102272"
					ImageColor3={Color3.fromRGB(0, 0, 0)}
					ImageTransparency={0.9}
					Position={new UDim2(-0.3, 0, -0.049, 0)}
					ScaleType={Enum.ScaleType.Tile}
					Size={new UDim2(1.586, 0, 1.118, 0)}
					SliceCenter={new Rect(0, 256, 0, 256)}
					TileSize={new UDim2(0, 85, 0, 85)}
				/>
				<textbutton
					Key="optionb2"
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					Font={Enum.Font.SourceSans}
					Position={new UDim2(-0.118, 0, 0.729, 0)}
					Size={new UDim2(0.308, 0, 0.068, 0)}
					Text={""}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextSize={56}
					TextWrapped={true}
					ZIndex={2}
				>
					<textlabel
						BackgroundTransparency={1}
						Font={Enum.Font.SourceSans}
						Position={new UDim2(0.859, 0, 0.113, 0)}
						Size={new UDim2(0.141, 0, 0.686, 0)}
						Text="X"
						TextColor3={Color3.fromRGB(0, 0, 0)}
						TextScaled={true}
						TextSize={14}
						TextWrapped={true}
					/>
					<uicorner CornerRadius={new UDim(0.06, 0)} />
					<uigradient
						Rotation={-90}
						Transparency={
							new NumberSequence([
								new NumberSequenceKeypoint(0, 1, 0),
								new NumberSequenceKeypoint(0.112, 0.658, 0),
								new NumberSequenceKeypoint(0.484, 0.253, 0),
								new NumberSequenceKeypoint(1, 0, 0),
							])
						}
					/>
				</textbutton>
			</frame>
			<frame
				Key="BLACK"
				BackgroundColor3={Color3.fromRGB(0, 0, 0)}
				BackgroundTransparency={0.4}
				BorderSizePixel={0}
				Position={new UDim2(0.742, 0, 0.245, 0)}
				Rotation={40}
				Size={new UDim2(0.395, 0, 1.162, 0)}
				Visible={false}
				ZIndex={4}
			/>
			<frame
				Key="line"
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BorderSizePixel={0}
				Position={new UDim2(0.532, 0, 1, 0)}
				Size={new UDim2(0.047, 0, 1.262, 0)}
				ZIndex={2}
			/>
		</frame>
		<textbutton
			Key="Play"
			BackgroundColor3={Color3.fromRGB(79, 197, 103)}
			Font={Enum.Font.SourceSans}
			Position={new UDim2(0.212, 0, 0.636, 0)}
			Size={new UDim2(0.573, 0, 0.068, 0)}
			Text={""}
			TextColor3={Color3.fromRGB(255, 255, 255)}
			TextSize={56}
			TextWrapped={true}
			Visible={false}
		>
			<uigradient
				Color={
					new ColorSequence([
						new ColorSequenceKeypoint(0, Color3.fromRGB(141, 141, 141)),
						new ColorSequenceKeypoint(1, Color3.fromRGB(255, 255, 255)),
					])
				}
				Rotation={-90}
			/>
			<textlabel
				BackgroundTransparency={1}
				Font={Enum.Font.SourceSans}
				Position={new UDim2(0, 0, 0.098, 0)}
				Size={new UDim2(1, 0, 0.772, 0)}
				Text="Play"
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={14}
				TextWrapped={true}
			/>
			<uicorner CornerRadius={new UDim(0.06, 0)} />
		</textbutton>
	</screengui>
);
