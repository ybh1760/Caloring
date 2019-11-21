import React from 'react'
import { View, Text, TextInput, Button, AsyncStorage } from 'react-native'
import styled from 'styled-components'
import * as Auth from '../../functions/googleOAuth'

export default props => {
    return (
        <Screen>
            <Button
                title="google"
                onPress={async () => {
                    const authState = await Auth.signInAsync()
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
