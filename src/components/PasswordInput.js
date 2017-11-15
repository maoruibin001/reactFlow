/**
 * Created by lenovo on 2017/11/14.
 */
import styled from 'styled-components';

const PasswordInput = styled.input.attrs({
  type: 'password',
  padding: props => props.size || '.5em'
})`
  border: 1px solid red;
  color: orange;
  padding: ${props => props.padding}
`;

export default PasswordInput;