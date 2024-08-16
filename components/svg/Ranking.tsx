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
        width={40}
        height={40}
        fill="none"
        {...props}
    >
        <Path fill="#fff" d="M.5 0h40v40H.5z" />
        <Path
            fill="#FA6650"
            fillOpacity={0.14}
            d="M25.4 13.735c1.81 0 3.277 1.53 3.277 3.416v4.839c0 2.904-1.989 5.325-4.624 5.865h-2.225c-2.635-.541-4.622-2.961-4.622-5.865v-4.84c0-1.885 1.467-3.415 3.277-3.415H25.4Z"
        />
        <Path
            stroke="url(#a)"
            strokeWidth={3}
            d="M32.085 11.97c.975 0 1.765.79 1.765 1.765v2.58c0 2.4-1.946 4.345-4.345 4.345h-.883v-8.69h3.463Zm-19.357 0v8.69h-.883A4.345 4.345 0 0 1 7.5 16.316v-2.58c0-.974.79-1.764 1.765-1.764h3.463Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#080808"
            strokeWidth={3}
            d="M24.644 8c1.097 0 2.09.444 2.808 1.163a3.958 3.958 0 0 1 1.163 2.808v7.5a7.916 7.916 0 0 1-2.326 5.615 7.916 7.916 0 0 1-5.615 2.326 7.916 7.916 0 0 1-5.615-2.326 7.916 7.916 0 0 1-2.326-5.615v-7.5c0-1.097.444-2.09 1.163-2.808A3.958 3.958 0 0 1 16.703 8h7.941Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#080808"
            strokeLinecap="square"
            strokeWidth={3}
            d="M20.674 29.023v2.8"
        />
        <Path
            stroke="#080808"
            strokeLinecap="round"
            strokeWidth={3}
            d="M13.615 32.706h14.117"
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
                <Stop offset={1} stopColor="#FA6650" />
            </LinearGradient>
        </Defs>
    </Svg>
)
export { SvgComponent as RankingIcon }
