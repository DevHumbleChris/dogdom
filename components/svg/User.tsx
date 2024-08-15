import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = ({ size }: { size: number }) => (
    <Svg
        width={size}
        height={size}
        fill="none"
    >
        <G filter="url(#a)">
            <Path
                fill="#000"
                fillOpacity={0.85}
                fillRule="evenodd"
                d="M9.655 8.89c0-2.399 1.945-4.343 4.345-4.343h4.344V8.89a4.345 4.345 0 0 1-8.689 0ZM14 2.547a6.344 6.344 0 1 0 0 12.688 6.345 6.345 0 0 0 6.344-6.345V3.547a1 1 0 0 0-1-1H14ZM10.19 16.35a6.056 6.056 0 0 0-6.034 5.544 1 1 0 1 0 1.993.17 4.056 4.056 0 0 1 4.042-3.714h7.618a4.057 4.057 0 0 1 4.042 3.713 1 1 0 1 0 1.993-.169 6.057 6.057 0 0 0-6.035-5.544h-7.618Zm3.355-6.317a1 1 0 1 0-1.414 1.415 2.79 2.79 0 0 0 3.946 0 1 1 0 0 0-1.414-1.415.79.79 0 0 1-1.118 0Z"
                clipRule="evenodd"
            />
        </G>
        <Defs></Defs>
    </Svg>
)
export { SvgComponent as UserIcon }
