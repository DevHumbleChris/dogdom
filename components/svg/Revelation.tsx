import * as React from "react"
import Svg, {
    SvgProps,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={41}
        height={40}
        fill="none"
        {...props}
    >
        <Path fill="#fff" d="M.5 0h40v40H.5z" />
        <Path
            fill="#FA6650"
            fillOpacity={0.14}
            fillRule="evenodd"
            d="M19.5 18h13a3 3 0 0 1 3 3v6a9 9 0 0 1-9 9h-7a3 3 0 0 1-3-3V21a3 3 0 0 1 3-3Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#080808"
            strokeWidth={3}
            d="M28 8.5H13a6 6 0 0 0-6 6v14a6 6 0 0 0 6 6h15a6 6 0 0 0 6-6v-14a6 6 0 0 0-6-6Z"
        />
        <Path
            stroke="#080808"
            strokeLinecap="round"
            strokeWidth={3}
            d="M26 6.357v4.286M15 6.357v4.286"
        />
        <Path
            stroke="url(#a)"
            strokeLinecap="round"
            strokeWidth={3}
            d="M14.5 25.5h5"
        />
        <Path
            stroke="url(#b)"
            strokeLinecap="round"
            strokeWidth={3}
            d="M14.5 18.5h13"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={17}
                x2={8.052}
                y1={11}
                y2={11}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#FF9B94" />
                <Stop offset={1} stopColor="#FA6650" />
            </LinearGradient>
            <LinearGradient
                id="b"
                x1={17}
                x2={8.052}
                y1={11}
                y2={11}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#FF9B94" />
                <Stop offset={0.994} stopColor="#FA6650" />
            </LinearGradient>
        </Defs>
    </Svg>
)
export { SvgComponent as Revelation }
