import React from 'react'
import { ImageBackground } from 'react-native'

export default function Background(props: any) {
    const { fat, children } = props
    switch (fat) {
        case 1:
            return (
                <ImageBackground
                    source={require('../../../assets/backgroundImg/backgroundVer1.png')}
                    style={props.style}
                >
                    {children}
                </ImageBackground>
            )
        case 2:
            return (
                <ImageBackground
                    source={require('../../../assets/backgroundImg/backgroundVer2.png')}
                    style={props.style}
                >
                    {children}
                </ImageBackground>
            )
        case 3:
            return (
                <ImageBackground
                    source={require('../../../assets/backgroundImg/backgroundVer3.png')}
                    style={props.style}
                >
                    {children}
                </ImageBackground>
            )
        case 4:
            return (
                <ImageBackground
                    source={require('../../../assets/backgroundImg/backgroundVer3.png')}
                    style={props.style}
                >
                    {children}
                </ImageBackground>
            )
        case 5:
            return (
                <ImageBackground
                    source={require('../../../assets/backgroundImg/backgroundVer5.png')}
                    style={props.style}
                >
                    {children}
                </ImageBackground>
            )
        default:
            return (
                <ImageBackground
                    source={require('../../../assets/backgroundImg/backgroundVer1.png')}
                    style={props.style}
                >
                    {children}
                </ImageBackground>
            )
    }
}
