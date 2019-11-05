import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = props => (
    <Svg width={65} height={65} fill="none" {...props}>
        <Path
            d="M25.9 47.075L45.4 32.45 25.9 17.825v29.25zM9.445 9.598C15.844 3.199 23.512 0 32.45 0s16.555 3.2 22.852 9.598C61.701 15.895 64.9 23.512 64.9 32.45s-3.2 16.606-9.598 23.005C49.005 61.752 41.388 64.9 32.45 64.9s-16.606-3.149-23.004-9.446C3.149 49.056 0 41.389 0 32.45S3.149 15.895 9.446 9.598z"
            fill="#FCD21D"
        />
    </Svg>
)

export default SvgComponent
