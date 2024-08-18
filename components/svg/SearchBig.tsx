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
            d="M16.57 11.285a6.285 6.285 0 1 1-12.57 0 6.285 6.285 0 0 1 12.57 0Zm-1.177 6.522a8.285 8.285 0 1 1 1.414-1.414l3.85 3.85a1 1 0 0 1-1.414 1.414l-3.85-3.85Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as SearchBig }
