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
            d="M16.049 11.024a5.024 5.024 0 1 1-10.049 0 5.024 5.024 0 0 1 10.049 0Zm-.815 5.624a7.024 7.024 0 1 1 1.414-1.414l3.279 3.278a1 1 0 0 1-1.415 1.415l-3.278-3.279Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as SearchIcon }
