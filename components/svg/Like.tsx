import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            fillOpacity={0.4}
            fillRule="evenodd"
            d="M6 6.375h.767c.684 0 1.297-.425 1.537-1.066l.568-1.514a.647.647 0 0 1 1.253.227v1.021c0 .736.596 1.332 1.332 1.332h3.054c.32 0 .558.292.496.605l-1.123 5.616a1.125 1.125 0 0 1-1.104.904H6V6.375ZM5.962 5.25h.805a.517.517 0 0 0 .484-.336L7.819 3.4a1.772 1.772 0 0 1 3.431.622v1.021c0 .114.093.207.207.207h3.054c1.029 0 1.8.941 1.599 1.95l-1.123 5.616a2.25 2.25 0 0 1-2.207 1.809H5.844a1.875 1.875 0 0 1-3.594-.75v-8.25a1.875 1.875 0 0 1 3.712-.375Zm-1.087.375a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0v-8.25Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as Liked }
