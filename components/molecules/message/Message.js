import React from 'react'
import styled from 'styled-components/native'

export default props => {
    return <Message style={props.style} />
}

const Message = styled.View({
    width: 150,
    height: 80,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
})
