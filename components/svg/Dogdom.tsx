import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={71}
        height={70}
        fill="none"
        {...props}
    >
        <Rect width={70} height={70} x={0.5} fill="#FA6650" rx={16} />
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M35.297 12.207c.069-.01.138-.02.21-.02 14.617 0 26.51 11.883 26.51 26.49 0 .86-.043 1.728-.127 2.582-.335 3.419-3.211 5.997-6.689 5.997-3.707 0-6.723-3.014-6.723-6.718a28.71 28.71 0 0 0-3.724-14.15 1.696 1.696 0 0 1 .64-2.312 1.699 1.699 0 0 1 2.314.64 32.082 32.082 0 0 1 4.165 15.79c0 1.866 1.493 3.358 3.328 3.358 1.695 0 3.149-1.29 3.31-2.937.074-.744.11-1.501.11-2.25 0-12.736-10.369-23.097-23.114-23.097-.07 0-.139-.01-.206-.02l-.031-.004-.032.004c-.068.01-.135.02-.206.02-12.746 0-23.115 10.36-23.115 23.096 0 .75.037 1.507.11 2.251.162 1.647 1.616 2.937 3.31 2.937a3.331 3.331 0 0 0 3.33-3.326 32.11 32.11 0 0 1 4.164-15.822 1.699 1.699 0 0 1 2.314-.64 1.695 1.695 0 0 1 .64 2.312 28.681 28.681 0 0 0-3.724 14.118c0 3.736-3.016 6.75-6.723 6.75-3.478 0-6.353-2.578-6.69-5.997a26.483 26.483 0 0 1-.126-2.583c0-14.606 11.892-26.489 26.51-26.489.072 0 .14.01.21.02l.028.004.027-.004Zm11.575 35.066c0-.94.773-1.7 1.725-1.7.953 0 1.725.76 1.725 1.7v2.504c0 4.556-3.76 8.263-8.382 8.263a8.413 8.413 0 0 1-6.666-3.263 8.413 8.413 0 0 1-6.667 3.263c-4.621 0-8.381-3.707-8.381-8.263v-2.504c0-.94.772-1.7 1.725-1.7.953 0 1.725.76 1.725 1.7v2.504c0 2.681 2.212 4.862 4.931 4.862 2.72 0 4.932-2.18 4.932-4.862v-4.114a3.338 3.338 0 0 0-.695.522 2.324 2.324 0 0 1-3.252 0 2.245 2.245 0 0 1 0-3.206c3.108-3.063 8.165-3.064 11.272 0 .899.885.899 2.32 0 3.206a2.311 2.311 0 0 1-1.626.664 2.309 2.309 0 0 1-1.626-.664 3.357 3.357 0 0 0-.603-.469v4.061c0 2.681 2.212 4.862 4.931 4.862 2.72 0 4.932-2.18 4.932-4.862v-2.504ZM28.03 34.521a2.793 2.793 0 0 1 2.786 2.8c0 1.547-1.247 2.8-2.786 2.8a2.793 2.793 0 0 1-2.787-2.8c0-1.546 1.247-2.8 2.787-2.8Zm13.933 0a2.793 2.793 0 0 1 2.787 2.8c0 1.547-1.248 2.8-2.787 2.8a2.793 2.793 0 0 1-2.787-2.8c0-1.546 1.248-2.8 2.787-2.8Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as Dogdom }