import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import styled from 'styled-components/native'

import Text from '../../atoms/text/Text'
import Grey from '../../atoms/Icon/Grey'
import Red from '../../atoms/Icon/Red'
import Colors from '../../../constants/Colors'
import FontSize from '../../../constants/FontSize'

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
                <Grey width={FontSize(3)} height={FontSize(3)} />
            ) : (
                <Red width={FontSize(3)} height={FontSize(3)} />
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
    marginBottom: height * 0.01,
    alignItems: 'center',
})

const styles = StyleSheet.create({
    content: { marginLeft: 5 },
})
