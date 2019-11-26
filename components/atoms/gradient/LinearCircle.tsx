import { Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'

import Rem from '../../../constants/Rem'

const { height: ScreenHeight } = Dimensions.get('window')

const LinearGrad = styled(LinearGradient)<{ dim: number }>`
    width: ${ScreenHeight > 640 ? props => props.dim : Rem() * 5};
    height: ${ScreenHeight > 640 ? props => props.dim : Rem() * 5};
    border-radius: ${ScreenHeight > 640 ? props => props.dim / 2 : Rem() * 2.5};
`
export default LinearGrad
