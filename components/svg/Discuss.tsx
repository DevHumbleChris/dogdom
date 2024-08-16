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
            d="M25.887 14.226h1.776a6.887 6.887 0 0 1 6.755 8.226 12.911 12.911 0 0 1-9.808 10.08l-5.339 1.212a2.903 2.903 0 0 1-3.545-2.831v-6.526c0-5.612 4.55-10.161 10.161-10.161Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#080808"
            strokeWidth={3}
            d="M21.048 7.5c3.328 0 6.338 1.347 8.52 3.529a12.006 12.006 0 0 1 3.529 8.52c0 3.327-1.347 6.337-3.53 8.519a12.006 12.006 0 0 1-8.519 3.529H9V19.548c0-3.327 1.347-6.337 3.529-8.52a12.006 12.006 0 0 1 8.52-3.528Z"
        />
        <Path
            stroke="url(#a)"
            strokeLinecap="round"
            strokeWidth={3}
            d="M15.726 22.936h4.838"
        />
        <Path
            stroke="url(#b)"
            strokeLinecap="round"
            strokeWidth={3}
            d="M15.726 17.613H26.37"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={33.85}
                x2={7.653}
                y1={16.316}
                y2={16.316}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#FF9B94" />
                <Stop offset={0.994} stopColor="#FA6650" />
            </LinearGradient>
            <LinearGradient
                id="b"
                x1={33.85}
                x2={7.653}
                y1={16.316}
                y2={16.316}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#FF9B94" />
                <Stop offset={1} stopColor="#FA6650" />
            </LinearGradient>
        </Defs>
    </Svg>
)
export { SvgComponent as DiscussIcon }
