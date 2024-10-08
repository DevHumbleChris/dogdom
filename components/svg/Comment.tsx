import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={19}
        height={18}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            fillOpacity={0.4}
            fillRule="evenodd"
            d="M2.563 14.368c-.113.405.232.705.615.585l1.514-.45c.413-.135.736.037 1.118.27 1.095.646 2.46.977 3.69.977 3.72 0 7.5-2.877 7.5-7.511C17 4.242 13.775.75 9.515.75 5.157.75 2 4.31 2 8.261c0 1.262.368 2.56 1.013 3.748.12.196.135.443.052.676l-.502 1.683Zm3.81-.569c-.363-.222-1.088-.665-2.013-.37l-.376.111.153-.511a1.912 1.912 0 0 0-.146-1.576c-.563-1.042-.866-2.15-.866-3.192 0-3.37 2.692-6.386 6.39-6.386 3.612 0 6.36 2.962 6.36 6.364 0 3.927-3.187 6.386-6.375 6.386-1.047 0-2.208-.286-3.112-.816l-.015-.01Zm1.275-3.075a.563.563 0 0 0-.796.795 3.562 3.562 0 0 0 5.038 0 .562.562 0 1 0-.795-.796 2.438 2.438 0 0 1-3.447 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as Comment }
