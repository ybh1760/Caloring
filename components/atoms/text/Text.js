import styled from 'styled-components/native'
import Colors from '../../../constants/Colors'

const TextProps = props => ({
    fontSize: props.size,
    fontFamily: props.font,
    color: props.color,
    textAlign: props.align,
})

TextProps.defaultProps = {
    color: Colors.grey,
    fontFamily: 'regular',
}

export default styled.Text(TextProps)
