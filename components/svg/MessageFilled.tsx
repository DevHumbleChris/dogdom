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
            d="M10.943 2.907C17.816 1.784 23.72 7.393 23.098 14.19c-.443 4.845-4.312 8.827-9.146 9.393-1.9.222-3.72-.068-5.336-.754h-.001a1.114 1.114 0 0 0-.435-.1H5.683a2.316 2.316 0 0 1-2.316-2.315v-2.265a1.12 1.12 0 0 0-.12-.48v-.003a10.496 10.496 0 0 1-.844-6.268c.731-4.32 4.215-7.785 8.54-8.491Zm-.857 13.037a1 1 0 0 1 1.415 0c.66.661 1.731.661 2.392 0a1 1 0 0 1 1.414 1.415 3.691 3.691 0 0 1-5.22 0 1 1 0 0 1 0-1.415Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as MessageFilled }
