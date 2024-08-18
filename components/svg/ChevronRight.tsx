import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.25}
            strokeWidth={1.5}
            d="m10 7 5 5-5 5"
        />
    </Svg>
)
export { SvgComponent as ChevronRight }
