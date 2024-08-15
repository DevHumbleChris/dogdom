import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = ({ size }: { size: number }) => (
    <Svg
        width={size}
        height={size}
        fill="none"
    >
        <G clipPath="url(#a)">
            <Path
                fill="#000"
                fillOpacity={0.85}
                fillRule="evenodd"
                d="M19.451 10.222v8.915a1 1 0 0 1-1 1H5.55a1 1 0 0 1-1-1v-8.914a2 2 0 0 1 .796-1.597l6.056-4.562a1 1 0 0 1 1.204 0l6.05 4.561a2 2 0 0 1 .796 1.597Zm-16.902.001a4 4 0 0 1 1.593-3.195l6.056-4.562a3 3 0 0 1 3.611 0l6.05 4.562a4 4 0 0 1 1.592 3.194v8.915a3 3 0 0 1-3 3H5.55a3 3 0 0 1-3-3v-8.914Zm8.074 4.224a1 1 0 0 0-1.204 1.597c.748.565 1.686.82 2.581.82s1.833-.255 2.581-.82a1 1 0 1 0-1.204-1.597c-.345.26-.84.417-1.377.417s-1.032-.156-1.377-.417Z"
                clipRule="evenodd"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export { SvgComponent as HomeIcon }
