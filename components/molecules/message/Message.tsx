import React from 'react'
import styled from 'styled-components/native'

export default function Message(props: { style?: object }) {
    return <MessageCmp style={props.style} />
}

const MessageCmp = styled.View({
    width: 150,
    height: 80,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
})
