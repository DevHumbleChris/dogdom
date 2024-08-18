import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={18}
        height={22}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            d="M13.324.6a.506.506 0 0 0-.87.354v2.792c0 1.171.965 2.135 2.136 2.135.738.008 1.763.01 2.635.008a.505.505 0 0 0 .362-.855L13.324.6Z"
            opacity={0.5}
        />
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M15.492 7.43c.27.002.508.004.717.004a133.498 133.498 0 0 0 1.31-.008.48.48 0 0 1 .481.484v8.504c0 2.631-2.111 4.762-4.716 4.762H4.944C2.215 21.177 0 18.942 0 16.184V4.774C0 2.145 2.113 0 4.726 0h5.6c.265 0 .48.218.48.486v3.405c0 1.941 1.581 3.532 3.504 3.532.443 0 .837.004 1.182.007Zm-9.22 5.879h5.235a.789.789 0 1 0 0-1.577H6.273a.79.79 0 0 0 0 1.577Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as NoticeHelp }
