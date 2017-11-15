/**
 * Created by lenovo on 2017/11/14.
 */
import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import PasswordInput from './PasswordInput';

// The Button from the last section without the interpolations
const H1Comp = styled.div`
  color: green;
  background-color: #ccc;
  font-size: ${props => props.size};
`;

const H2Comp = H1Comp.extend`
	color: tomato;
	border-color: tomato;
`;

const H3Comp = H1Comp.extend`
  background-color: green;
  color: green;
`;
const Animation = keyframes`
  0% {transform: rotate(0deg)}
  20% {transform: rotate(300deg)}
  100% {transform: rotate(360deg)}
`;

const Button = styled.button`
  animation:${Animation} 5s;
`;
class App extends Component {
  render() {
    return <div>
      <Button>i am button</Button>
      <H1Comp size="60px"><PasswordInput size="1em"/>hello world, i love you.</H1Comp>
      <H2Comp>hi , i am h2</H2Comp>
      <H3Comp>hi, i am h3</H3Comp>
    </div>
  }
}
export default App;