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
            fill="#fff"
            fillRule="evenodd"
            d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-2 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as MoreBig }
