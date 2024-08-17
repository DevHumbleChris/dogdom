import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            fillOpacity={0.4}
            d="M8.813 2.625A6.188 6.188 0 1 0 15 8.813a.562.562 0 1 1 1.125 0A7.312 7.312 0 1 1 8.812 1.5a.563.563 0 0 1 0 1.125Z"
        />
        <Path
            fill="#000"
            fillOpacity={0.4}
            d="M10.875 2.063c0-.311.252-.563.563-.563h4.124c.311 0 .563.252.563.563v4.124a.562.562 0 1 1-1.125 0V3.42L9.21 9.21a.563.563 0 0 1-.795-.795l5.79-5.79h-2.768a.562.562 0 0 1-.562-.563Z"
        />
    </Svg>
)
export { SvgComponent as Share }
