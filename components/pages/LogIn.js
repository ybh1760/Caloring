import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styled from 'styled-components'
import * as WebBrowser from 'expo-web-browser'

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
            <Button
                title="카카오톡으로 로그인"
                onPress={async () => {
                    const result = await WebBrowser.openBrowserAsync(
                        'https://kauth.kakao.com/oauth/authorize?client_id=8957674e13342897135e3326bc0a4e57&redirect_uri=http://13.124.85.168:8080/login&response_type=code'
                    )
                    Linking.makeUrl()
                    // const result = await WebBrowser.openAuthSessionAsync(
                    //     'https://kauth.kakao.com/oauth/authorize?client_id=8957674e13342897135e3326bc0a4e57&redirect_uri=http://13.124.85.168:8080/login&response_type=code',
                    //     'exp://wg-qka.community.app.exp.direct:80'
                    // )
                    // console.log(result.type)
                }}
            />
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
