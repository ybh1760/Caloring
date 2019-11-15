import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styled from 'styled-components'

export default props => {
    return (
        <Screen>
            {/* <Input>
                <Email>
                    <Text>이메일</Text>
                    <TextInput />
                </Email>
                <Password>
                    <Text></Text>
                    <TextInput />
                </Password>
            </Input> */}
            <Button title="카카오톡으로 로그인" onPress={() => {}} />
        </Screen>
    )
}

const Screen = styled.View({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
})

const Input = styled.View({})

const Email = styled.View({})

const Password = styled.View({})
