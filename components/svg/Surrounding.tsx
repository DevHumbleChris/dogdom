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
            stroke="url(#a)"
            strokeWidth={3}
            d="M17.195 33.47a2.647 2.647 0 1 0 0-5.293 2.647 2.647 0 0 0 0 5.294Z"
        />
        <Path
            stroke="url(#b)"
            strokeWidth={3}
            d="M28.665 33.47a2.647 2.647 0 1 0 0-5.294 2.647 2.647 0 0 0 0 5.295Z"
        />
        <Path
            fill="#FA6650"
            fillOpacity={0.14}
            d="m20.554 20.054.069.18 4.93.001c.71 0 1.373-.338 1.792-.906l.092-.135 3.925-6.207a.453.453 0 0 0-.296-.685l-.08-.008H17.26l3.294 7.76Z"
        />
        <Path
            stroke="#080808"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M11.88 8.858h17.566a1.765 1.765 0 0 1 1.489 2.713l-3.876 6.084a3.53 3.53 0 0 1-2.977 1.633h-7.77"
        />
        <Path
            stroke="#080808"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M7.5 7h1.812c1.06 0 2.017.632 2.434 1.606l4.147 9.701c.258.603.16 1.3-.254 1.808l-1.116 1.372a1.348 1.348 0 0 0 1.045 2.199h15.898"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={19.842}
                x2={14.578}
                y1={30.824}
                y2={30.824}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#FF9B94" />
                <Stop offset={1} stopColor="#FA6650" />
            </LinearGradient>
            <LinearGradient
                id="b"
                x1={31.312}
                x2={26.018}
                y1={30.824}
                y2={30.824}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#FF9B94" />
                <Stop offset={0.994} stopColor="#FA6650" />
            </LinearGradient>
        </Defs>
    </Svg>
)
export { SvgComponent as SurroundingIcon }
