import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

const SvgComponent = (props: any) => (
    <Svg viewBox="0 0 17 17" fill="none" {...props}>
        <Circle cx={8.5} cy={8.5} r={8.5} fill="#5A5A5A" />
        <Path
            d="M7 3H5.5v1.5H7V3zm1.5 0H7v1.5h1.5V3zM10 3H8.5v1.5H10V3zm1.5 0H10v1.5h1.5V3zm-6 1.5H4V6h1.5V4.5zm1.5 0H5.5V6H7V4.5zm1.5 0H7V6h1.5V4.5zm1.5 0H8.5V6H10V4.5zm1.5 0H10V6h1.5V4.5zm1.5 0h-1.5V6H13V4.5zM5.5 6H4v1.5h1.5V6zM7 6H5.5v1.5H7V6zm4.5 0H10v1.5h1.5V6zM13 6h-1.5v1.5H13V6zM5.5 7.5H4V9h1.5V7.5zm1.5 0H5.5V9H7V7.5zM5.5 9H4v1.5h1.5V9zM7 9H5.5v1.5H7V9zm4.5 0H10v1.5h1.5V9zM13 9h-1.5v1.5H13V9zm-7.5 1.5H4V12h1.5v-1.5zm1.5 0H5.5V12H7v-1.5zm1.5 0H7V12h1.5v-1.5zm1.5 0H8.5V12H10v-1.5zm1.5 0H10V12h1.5v-1.5zm1.5 0h-1.5V12H13v-1.5zM7 12H5.5v1.5H7V12zm1.5 0H7v1.5h1.5V12zm1.5 0H8.5v1.5H10V12zm1.5 0H10v1.5h1.5V12z"
            fill="#FCD21D"
        />
    </Svg>
)

export default SvgComponent
