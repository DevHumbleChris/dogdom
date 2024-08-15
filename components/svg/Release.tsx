import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = ({ size }: { size: number }) => (
    <Svg
        width={size}
        height={size}
        fill="none"
    >
        <Path
            fill="#000"
            fillOpacity={0.85}
            fillRule="evenodd"
            d="M21.5 12.763a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm2 0c0 6.076-4.925 11-11 11s-11-4.924-11-11c0-6.075 4.925-11 11-11s11 4.925 11 11Zm-11 5a1 1 0 0 1-1-1v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 0 1-1 1Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as ReleaseIcon }
