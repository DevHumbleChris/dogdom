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
            d="M29.5 25a4 4 0 0 1 4 4v7h-8v-7a4 4 0 0 1 4-4Zm-15 0a4 4 0 0 1 4 4v7h-8v-7a4 4 0 0 1 4-4Z"
            clipRule="evenodd"
        />
        <Path
            stroke="url(#a)"
            strokeWidth={3}
            d="M12.5 15.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
        />
        <Path
            stroke="url(#b)"
            strokeWidth={3}
            d="M27.5 15.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
        />
        <Path
            stroke="#080808"
            strokeWidth={3}
            d="M12.5 20.5c1.243 0 2.368.504 3.182 1.318A4.486 4.486 0 0 1 17 25v9.5H8V25c0-1.243.504-2.368 1.318-3.182A4.486 4.486 0 0 1 12.5 20.5Zm15 0c1.243 0 2.368.504 3.182 1.318A4.486 4.486 0 0 1 32 25v9.5h-9V25c0-1.243.504-2.368 1.318-3.182A4.486 4.486 0 0 1 27.5 20.5Z"
            clipRule="evenodd"
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
                x1={32}
                x2={23}
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
export { SvgComponent as Nearby }
