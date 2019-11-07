import * as Permissions from 'expo-permissions'

export const verifyLocationPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION)
    if (result.status !== 'granted') {
        Alert.alert(
            'Insuffient Permissions',
            'you need to grant gps permission',
            [{ text: 'Okay' }]
        )
        return false
    }
    return true
}
