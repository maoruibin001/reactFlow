/**
 * Created by lenovo on 2017/11/15.
 */
import React, {Component} from 'react';

const Child = (props) => {
  return <div><ul>
    {props.names.map((name, i) => {
      return <li key={i}>{name}</li>
    })}
  </ul></div>
}
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['mao', 'rui'],
    }
  }

  onClick() {
    let names = this.state.names;
    names.push('bin')
    this.setState({
      names: names
    })
  }

  render() {
    return <div>
      <Child names={this.state.names}/>
      <h1>parent name is :{ [...this.state.names] }</h1>
      <button onClick={this.onClick.bind(this)}>click</button>
    </div>
  }
}

export default Parent;