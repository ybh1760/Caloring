import styled from 'styled-components/native'

import Colors from '../../../constants/Colors'
import Rem from '../../../constants/Rem'

const ItemBox = styled.View({
    width: Rem() * 7.5,
    height: Rem() * 7.5,
    backgroundColor: Colors.itemBackColor,
    marginRight: Rem() * 0.7,
    borderRadius: Rem() * 1.2,
})

export default ItemBox
