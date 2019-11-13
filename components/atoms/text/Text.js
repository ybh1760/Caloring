import styled from 'styled-components/native'

export default styled.Text(props => ({
    fontSize: props.size,
    fontFamily: props.font,
    color: props.color,
    textAlign: props.align,
}))
