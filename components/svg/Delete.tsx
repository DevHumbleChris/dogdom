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
            fillOpacity={0.55}
            fillRule="evenodd"
            d="M9.318 3a1.75 1.75 0 0 0-1.69 1.3L7.31 5.488H3.75a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5h-3.56l-.317-1.19A1.75 1.75 0 0 0 14.182 3H9.318Zm5.32 2.489-.215-.803a.25.25 0 0 0-.241-.186H9.318a.25.25 0 0 0-.241.186l-.215.803h5.775ZM4.681 9.003a.75.75 0 0 1 .815.68l.752 8.27A2.25 2.25 0 0 0 8.489 20h6.521a2.25 2.25 0 0 0 2.241-2.046l.752-8.272a.75.75 0 1 1 1.494.136l-.752 8.272a3.75 3.75 0 0 1-3.735 3.41H8.49a3.75 3.75 0 0 1-3.735-3.41l-.752-8.272a.75.75 0 0 1 .68-.815ZM12.75 12a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as DeleteIcon }
