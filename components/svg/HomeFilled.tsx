import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = ({ size }: { size: number }) => (
    <Svg
        width={size}
        height={size}
        fill="none"
    >
        <Path
            fill="#FA6650"
            fillRule="evenodd"
            d="M3 10.36a4 4 0 0 1 1.593-3.194l6.056-4.562a3 3 0 0 1 3.611 0l6.05 4.562a4 4 0 0 1 1.593 3.194v8.915a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8.914Zm7.924 4.425a.75.75 0 0 0-.903 1.197c.697.527 1.58.77 2.43.77.85 0 1.733-.243 2.431-.77a.75.75 0 1 0-.903-1.197c-.395.298-.946.467-1.528.467-.582 0-1.132-.169-1.527-.467Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as HomeFilled }
