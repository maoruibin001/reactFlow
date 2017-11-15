/**
 * Created by lenovo on 2017/11/15.
 */
import React, {Component} from 'react';

class ButtonList extends Component {
  render() {
    return <div>
      {this.props.buttons.map((e, i) => {
        return <button onClick={e.onClick} key={i}>{e.name}</button>
      })}
    </div>;
  }
}

export default ButtonList;