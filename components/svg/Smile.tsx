import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={24}
        height={13}
        fill="none"
        {...props}
    >
        <Path
            stroke="#FA6650"
            strokeLinecap="round"
            strokeWidth={4}
            d="M15.672 2A9.435 9.435 0 0 1 2.328 2"
        />
    </Svg>
)
export { SvgComponent as SmileIcon }
