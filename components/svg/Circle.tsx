import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = ({ size }: { size: number }) => (
    <Svg
        width={size}
        height={size}
        fill="none"
    >
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.85}
            strokeWidth={2}
            d="M11.807 7.215c1.783 0 3.39.751 4.524 1.953m-9.878 9.817a8.408 8.408 0 0 0 5.99 2.497c4.487 0 8.146-3.506 8.41-7.927m-14.4 5.43c2.074-.018 4.781-.563 7.607-1.628 2.829-1.066 5.223-2.445 6.794-3.802m-14.401 5.43c-1.993.019-3.405-.447-3.768-1.412-.326-.863.24-1.98 1.444-3.138a8.477 8.477 0 0 1-.124-1.39 8.437 8.437 0 0 1 8.437-8.438c3.03 0 5.679 1.602 7.167 4 1.66.079 2.815.543 3.14 1.404.363.964-.39 2.244-1.895 3.544"
        />
    </Svg>
)
export { SvgComponent as CircleIcon }
