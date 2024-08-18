import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        width={80}
        height={45}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M53.545 9.76a2.39 2.39 0 0 1 .343-.033c23.923 0 43.385 19.447 43.385 43.35 0 1.407-.07 2.829-.207 4.226-.55 5.595-5.256 9.815-10.947 9.815-6.068 0-11.004-4.932-11.004-10.994a46.984 46.984 0 0 0-6.093-23.158 2.775 2.775 0 0 1 1.048-3.783 2.78 2.78 0 0 1 3.787 1.047 52.503 52.503 0 0 1 6.814 25.841c0 3.054 2.444 5.496 5.448 5.496 2.773 0 5.153-2.112 5.417-4.806.12-1.218.18-2.457.18-3.684 0-20.842-16.97-37.798-37.828-37.798a2.365 2.365 0 0 1-.388-.04l-.052.008c-.11.016-.221.031-.336.031-20.86 0-37.829 16.957-37.829 37.799 0 1.227.06 2.466.18 3.684.266 2.694 2.645 4.806 5.418 4.806a5.452 5.452 0 0 0 5.448-5.443 52.548 52.548 0 0 1 6.815-25.894 2.78 2.78 0 0 1 3.786-1.047 2.775 2.775 0 0 1 1.049 3.783 46.938 46.938 0 0 0-6.095 23.105c0 6.115-4.936 11.047-11.003 11.047-5.69 0-10.397-4.22-10.947-9.815a43.343 43.343 0 0 1-.207-4.226c0-23.903 19.462-43.35 43.385-43.35a2.39 2.39 0 0 1 .388.04l.045-.007Zm18.944 57.386c0-1.537 1.263-2.783 2.822-2.783 1.56 0 2.823 1.246 2.823 2.783v4.098c0 7.456-6.153 13.522-13.717 13.522a13.768 13.768 0 0 1-10.91-5.34 13.769 13.769 0 0 1-10.91 5.34c-7.563 0-13.716-6.066-13.716-13.522v-4.098c0-1.537 1.264-2.783 2.823-2.783s2.822 1.246 2.822 2.783v4.098c0 4.388 3.62 7.957 8.07 7.957 4.451 0 8.072-3.57 8.072-7.957V64.51c-.406.231-.79.512-1.137.854a3.803 3.803 0 0 1-5.323 0 3.673 3.673 0 0 1 0-5.247c5.086-5.013 13.363-5.014 18.448 0a3.673 3.673 0 0 1 0 5.247 3.781 3.781 0 0 1-2.661 1.087 3.78 3.78 0 0 1-2.66-1.087 5.49 5.49 0 0 0-.988-.767v6.646c0 4.388 3.62 7.957 8.07 7.957s8.072-3.57 8.072-7.957v-4.098ZM41.65 46.277c2.519 0 4.56 2.052 4.56 4.582 0 2.531-2.041 4.582-4.56 4.582-2.519 0-4.56-2.05-4.56-4.582 0-2.53 2.041-4.582 4.56-4.582Zm22.802 0c2.52 0 4.56 2.052 4.56 4.582 0 2.531-2.04 4.582-4.56 4.582-2.518 0-4.56-2.05-4.56-4.582 0-2.53 2.042-4.582 4.56-4.582Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as DogdomLight }
