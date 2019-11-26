import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import styled from 'styled-components/native'

import Text from '../../atoms/text/Text'
import Grey from '../../atoms/Icon/Grey'
import Red from '../../atoms/Icon/Red'
import Colors from '../../../constants/Colors'
import FontSize from '../../../constants/FontSize'
import Rem from '../../../constants/Rem'

const { height } = Dimensions.get('window')

interface LabelProps {
    image: string
    title: string
    score: number
}

export default function Label(props: LabelProps) {
    const { image, title, score } = props

    return (
        <Wrapper>
            {image === 'grey' ? (
                <Grey width={Rem() * 1.8} height={Rem() * 1.8} />
            ) : (
                <Red width={Rem() * 1.8} height={Rem() * 1.8} />
            )}
            <Text
                size={FontSize(1)}
                font="regular"
                color={Colors.grey}
                style={styles.content}
            >
                {title} {score}
            </Text>
        </Wrapper>
    )
}

const Wrapper = styled.View({
    flexDirection: 'row',
    marginBottom: Rem() * 0.7,
    alignItems: 'center',
})

const styles = StyleSheet.create({
    content: { marginLeft: 5 },
})
