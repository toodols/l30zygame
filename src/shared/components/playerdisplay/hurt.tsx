import Roact from "@rbxts/roact";
import { TopbarOffset } from "../topbaroffset";

const hurtTextureMap = [
	"http://www.roblox.com/asset/?id=1154560318",
	"http://www.roblox.com/asset/?id=1154562682",
	"http://www.roblox.com/asset/?id=1154571616",
	"http://www.roblox.com/asset/?id=1154573413",
	"http://www.roblox.com/asset/?id=1154575288",
];

interface Props {
	Health: number;
}
class HurtDisplay extends Roact.Component<Props> {
	render() {
		// y=4-\operatorname{floor}\left(\frac{\min\left(\max\left(x,0\right),99\right)}{20}\right)
		const index = 4 - math.floor(math.clamp(this.props.Health, 0, 99) / 20);

		return (
			<TopbarOffset>
				{index > 0 ? (
					<imagelabel
						Size={new UDim2(1, 0, 1, 0)}
						BorderSizePixel={0}
						ImageColor3={new Color3(1, 0, 0)}
						Image={hurtTextureMap[index]}
						BackgroundTransparency={1}
						ImageTransparency={0.7}
					></imagelabel>
				) : undefined}
			</TopbarOffset>
		);
	}
}

export { HurtDisplay };
