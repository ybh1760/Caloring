import styled from 'styled-components/native'
import Colors from '../../../constants/Colors'

interface Iprops {
    font?: string
    size?: number
    color?: string
    align?: string
}

const Text = styled.Text<Iprops>((props: any) => ({
    fontSize: props.size,
    fontFamily: props.font,
    color: props.color,
    textAlign: props.align,
}))

Text.defaultProps = {
    font: 'regular',
    color: Colors.grey,
}
export default Text
