import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={25}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke="#FA6650"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.5 22h6.177"
        />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13.492 2.913c.941-1.2 2.463-1.137 3.663-.196l1.776 1.393c1.2.941 1.626 2.401.685 3.603L9.027 21.222c-.354.452-.894.719-1.469.725L3.474 22l-.925-3.98c-.13-.558 0-1.145.354-1.599L13.492 2.913Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m11.508 5.442 6.124 4.8"
        />
    </Svg>
)
export { SvgComponent as DynamicIcon }
