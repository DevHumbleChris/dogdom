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
            fill="#000"
            d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
        />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeWidth={2}
            d="M8.5 2.5h-3a3 3 0 0 0-3 3v3M15.5 21.5h3a3 3 0 0 0 3-3v-3M21.5 8.5v-3a3 3 0 0 0-3-3h-3M2.5 15.5v3a3 3 0 0 0 3 3h3"
        />
    </Svg>
)
export { SvgComponent as Scan }
