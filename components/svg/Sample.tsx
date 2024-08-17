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
            d="M21.047 21h8.906a4 4 0 0 1 3.967 4.51l-.592 4.604A5.6 5.6 0 0 1 27.774 35h-4.548a5.6 5.6 0 0 1-5.554-4.886l-.592-4.604A4 4 0 0 1 21.047 21Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#080808"
            strokeWidth={3}
            d="M29.805 14.5a3.49 3.49 0 0 1 2.475 1.025A3.49 3.49 0 0 1 33.306 18l-1.498 11.711a5.487 5.487 0 0 1-1.825 3.422 5.487 5.487 0 0 1-3.63 1.367H14.647a5.488 5.488 0 0 1-3.629-1.367 5.487 5.487 0 0 1-1.825-3.422L7.724 18.453a3.49 3.49 0 0 1 .696-2.587 3.489 3.489 0 0 1 2.322-1.337l19.063-.029Z"
            clipRule="evenodd"
        />
        <Path
            stroke="url(#a)"
            strokeLinecap="round"
            strokeWidth={3}
            d="m15.457 28-.914-7"
        />
        <Path
            stroke="url(#b)"
            strokeLinecap="round"
            strokeWidth={3}
            d="m25.543 28 .914-7"
        />
        <Path stroke="#080808" strokeWidth={3} d="M14.5 14v-2a6 6 0 0 1 12 0v2" />
        <Defs>
            <LinearGradient
                id="a"
                x1={15}
                x2={15}
                y1={21}
                y2={27.959}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#FF9B94" />
                <Stop offset={1} stopColor="#FA6650" />
            </LinearGradient>
            <LinearGradient
                id="b"
                x1={26}
                x2={26}
                y1={21}
                y2={28}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#FF9B94" />
                <Stop offset={0.994} stopColor="#FA6650" />
            </LinearGradient>
        </Defs>
    </Svg>
)
export { SvgComponent as Sample }
