import React from 'react'
import styled from 'styled-components/native'

import meterCheck from '../atoms/displayMeter/Meters'
import { minTimer, secTimer } from '../atoms/timer/Timer'
import Text from '../atoms/text/Text'

interface DisplayDataProps {
    meter: number
    sec: number
    layorSize?: number
    dataSize?: number
    containerStyle?: object
}

export default function DisplayDatas(props: DisplayDataProps) {
    const { meter, sec, containerStyle, layorSize, dataSize } = props

    return (
        <DataContainer style={containerStyle}>
            <Row>
                <Content>
                    <Text size={layorSize} font="medium" align="center">
                        DISTANCE
                    </Text>
                </Content>
                <Content>
                    <Text size={layorSize} font="medium" align="center">
                        TIME
                    </Text>
                </Content>
            </Row>
            <Row>
                <Content>
                    <Text size={dataSize} align="center">
                        {meterCheck(meter)}
                    </Text>
                </Content>
                <Content>
                    <Text size={dataSize} align="center">
                        {minTimer(sec)}
                        {secTimer(sec)}
                    </Text>
                </Content>
            </Row>
        </DataContainer>
    )
}

const DataContainer = styled.View({
    width: '100%',
})

const Row = styled.View({
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
})

const Content = styled.View({
    width: '50%',
})
