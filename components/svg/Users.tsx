import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Circle cx={9.5} cy={7.5} r={3.5} fill="#FA6650" fillOpacity={0.2} />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M17.643 20h1.143c.947 0 1.714-.767 1.714-1.714v0a2.857 2.857 0 0 0-2.857-2.857m-4.5-8.003a3.427 3.427 0 0 1-3.429 3.427 3.427 3.427 0 1 1 0-6.853 3.427 3.427 0 0 1 3.429 3.426ZM12 14.28H7.429A3.428 3.428 0 0 0 4 17.707v0a2.283 2.283 0 0 0 2.283 2.283h6.863a2.283 2.283 0 0 0 2.283-2.283v0A3.428 3.428 0 0 0 12 14.279Zm5.071-1.136a2.286 2.286 0 1 1 0-4.572 2.286 2.286 0 0 1 0 4.572Z"
        />
    </Svg>
)
export { SvgComponent as Users }
