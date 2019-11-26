import React from 'react'
import {
    View,
    Text,
    TextInput,
    Button,
    AsyncStorage,
    WebView,
} from 'react-native'
import styled from 'styled-components'
import * as Auth from '../../functions/googleOAuth'

export default props => {
    return (
        <Screen>
            <WebView
                source={{
                    uri:
                        'https://kauth.kakao.com/oauth/authorize?client_id=8957674e13342897135e3326bc0a4e57&redirect_uri=http://13.124.85.168:8080/login&response_type=code',
                }}
                style={{ marginTop: 20 }}
            />
        </Screen>
    )
}

const Screen = styled.View({
    flex: 1,
})

const Input = styled.View({})

const Email = styled.View({})

const Password = styled.View({})
