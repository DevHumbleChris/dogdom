import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={20}
        height={23}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            fillRule="evenodd"
            d="m10.5 2.288 7 4.042a1 1 0 0 1 .5.866v8.083a1 1 0 0 1-.5.866l-7 4.041a1 1 0 0 1-1 0l-7-4.041a1 1 0 0 1-.5-.866V7.196a1 1 0 0 1 .5-.866l7-4.042a1 1 0 0 1 1 0ZM8.5.556a3 3 0 0 1 3 0l7 4.042A3 3 0 0 1 20 7.196v8.083a3 3 0 0 1-1.5 2.598l-7 4.041a3 3 0 0 1-3 0l-7-4.041A3 3 0 0 1 0 15.279V7.196a3 3 0 0 1 1.5-2.598l7-4.042Zm3.35 10.681a1.849 1.849 0 1 1-3.699 0 1.849 1.849 0 0 1 3.698 0Zm2 0a3.849 3.849 0 1 1-7.699 0 3.849 3.849 0 0 1 7.698 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as CogIcon }
