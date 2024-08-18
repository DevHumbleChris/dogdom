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
            stroke="#000"
            strokeWidth={1.5}
            d="M3 4.5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-15Z"
        />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 14h8"
        />
        <Path
            stroke="#FA6650"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 9h4"
        />
    </Svg>
)
export { SvgComponent as ArticleIcon }
