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
            d="M14.6 16.651a2.691 2.691 0 0 1-3.807 0m.31-12.757c-3.901.637-7.054 3.772-7.714 7.67a9.496 9.496 0 0 0 .762 5.675c.136.286.216.593.216.91v2.265c0 .727.59 1.316 1.316 1.316H8.18c.286 0 .565.067.827.179a9.472 9.472 0 0 0 4.828.68c4.363-.51 7.867-4.115 8.267-8.49.563-6.15-4.774-11.222-10.998-10.205Z"
        />
    </Svg>
)
export { SvgComponent as MessageIcon }
