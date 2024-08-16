import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            fillOpacity={0.55}
            fillRule="evenodd"
            d="M12 2a3 3 0 0 1 3 3v7a3 3 0 1 1-6 0V5a3 3 0 0 1 3-3Zm5.25 6.5a.75.75 0 0 0-.75.75V12a4.5 4.5 0 1 1-9 0V9.25a.75.75 0 0 0-1.5 0V12a6 6 0 0 0 5.25 5.95v1.55h-2a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-2v-1.55A6 6 0 0 0 18 12V9.25a.75.75 0 0 0-.75-.75Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as VoiceIcon }
