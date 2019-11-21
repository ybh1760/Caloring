import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

import Colors from '../../../constants/Colors'

const { width } = Dimensions.get('window')

const ItemBox = styled.View({
    width: width * 0.3,
    height: width * 0.3,
    backgroundColor: Colors.itemBackColor,
    marginRight: width * 0.03,
    borderRadius: 10,
})

export default ItemBox
