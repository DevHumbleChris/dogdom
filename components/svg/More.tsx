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
            fillOpacity={0.25}
            fillRule="evenodd"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm12 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as More }
