import * as React from "react"
import Svg, {
    SvgProps,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#4A90E2"
            fillOpacity={0.137}
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        />
        <Path
            fill="url(#a)"
            d="m13.98 7 .103.004a.75.75 0 0 1 .667.727l-.005.102-.241 2.166H16a.75.75 0 0 1 .102 1.494L16 11.5l-1.662-.001-.167 1.5H16a.75.75 0 0 1 .102 1.494L16 14.5l-1.996-.001-.259 2.334a.75.75 0 0 1-1.495-.064l.005-.102.24-2.168h-1.491l-.259 2.334a.75.75 0 0 1-1.495-.064l.005-.102.24-2.168H8a.75.75 0 0 1-.102-1.492L8 13l1.662-.001.166-1.5H8a.75.75 0 0 1-.102-1.492L8 10l1.995-.001.26-2.332A.75.75 0 0 1 10.98 7l.102.004a.75.75 0 0 1 .667.727l-.005.102-.241 2.166h1.491l.26-2.332A.75.75 0 0 1 13.98 7Zm-1.318 5.999.166-1.5h-1.49l-.167 1.5h1.491Z"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={8.112}
                x2={16.836}
                y1={7}
                y2={16.643}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#5EFCE8" />
                <Stop offset={1} stopColor="#736EFE" />
            </LinearGradient>
        </Defs>
    </Svg>
)
export { SvgComponent as Hashtag }
