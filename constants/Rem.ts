import { Dimensions } from 'react-native'

const { width: ScreenWidth } = Dimensions.get('window')

export default function Rem() {
    if (ScreenWidth > 400) {
        return 14
    } else if (ScreenWidth >= 360) {
        return 12
    } else {
        return 11
    }
}
