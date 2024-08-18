import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={22}
        height={19}
        fill="none"
        {...props}
    >
        <Rect
            width={5.588}
            height={15.647}
            y={3.353}
            fill="#fff"
            fillOpacity={0.5}
            rx={1.118}
        />
        <Path
            fill="#fff"
            d="M6.73 4.47H5.589v13.412h11.036a2.235 2.235 0 0 0 2.188-1.779l1.897-9.107a2.098 2.098 0 0 0-2.053-2.525H13.72a.308.308 0 0 1-.308-.309V2.641a2.64 2.64 0 0 0-5.113-.928l-.847 2.258c-.112.3-.4.5-.721.5Z"
        />
    </Svg>
)
export { SvgComponent as NoticeLike }
