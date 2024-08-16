import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={24}
        height={25}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            fillRule="evenodd"
            d="M3.437 11.132a8.5 8.5 0 0 1 17 0v6.25H21a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h.437v-6.25Zm15 1v5.25h-13v-6.25a6.5 6.5 0 0 1 13 0v1ZM8 20.882a1 1 0 1 0 0 2H16a1 1 0 1 0 0-2H8Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as Notification }
