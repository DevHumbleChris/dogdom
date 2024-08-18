import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={25}
        height={22}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            fillOpacity={0.5}
            d="M2.873 20.186 14.333 12v10H3.453c-.972 0-1.372-1.248-.58-1.814Z"
        />
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M13.333 22c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11Zm-4.5-9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as NoticeMessages }
