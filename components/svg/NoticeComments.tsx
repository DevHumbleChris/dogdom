import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={21}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            fillOpacity={0.5}
            d="M19.547 17.726H13.22c-.617 0-1.119.51-1.119 1.137 0 .628.502 1.137 1.12 1.137h6.326c.617 0 1.12-.509 1.12-1.137a1.13 1.13 0 0 0-1.12-1.137Z"
        />
        <Path
            fill="#fff"
            d="m8.788 4.338 5.995 4.844c.145.116.17.329.057.477L7.732 18.92a2.333 2.333 0 0 1-1.81.908l-3.881.048a.442.442 0 0 1-.435-.347l-.882-3.834c-.153-.704 0-1.433.447-1.994l7.143-9.306a.332.332 0 0 1 .474-.057ZM17.468 6.295l-1.156 1.443a.331.331 0 0 1-.47.053c-1.406-1.137-5.004-4.055-6.002-4.863a.343.343 0 0 1-.048-.48l1.114-1.385c1.012-1.302 2.775-1.421 4.198-.286l1.634 1.302c.67.525 1.117 1.218 1.27 1.947.177.801-.011 1.588-.54 2.269Z"
        />
    </Svg>
)
export { SvgComponent as NoticeComments }
