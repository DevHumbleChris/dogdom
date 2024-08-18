import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={25}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.5 1h-14a3 3 0 0 0-3 3v11.6a3 3 0 0 0 3 3h2.556V23l3.86-3.821a2 2 0 0 1 1.406-.579h3.868c.554 0 1.087-.219 1.48-.61l3.206-3.172c.4-.396.624-.934.624-1.496V4a3 3 0 0 0-3-3Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12.5 11V6"
        />
        <Path
            stroke="#FA6650"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 11V6"
        />
    </Svg>
)
export { SvgComponent as QuestionsIcon }
