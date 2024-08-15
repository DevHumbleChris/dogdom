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
            d="M12 2.547a6.344 6.344 0 1 0 0 12.688 6.345 6.345 0 0 0 6.344-6.345V3.547a1 1 0 0 0-1-1H12ZM8.19 16.35a6.056 6.056 0 0 0-6.034 5.544 1 1 0 0 0 .996 1.085h17.695a1 1 0 0 0 .997-1.085 6.057 6.057 0 0 0-6.035-5.544H8.191Zm3.355-6.317a1 1 0 0 0-1.414 1.415 2.79 2.79 0 0 0 3.946 0 1 1 0 1 0-1.414-1.415.79.79 0 0 1-1.118 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as UserFilled }
