/**
 * Created by lenovo on 2017/11/15.
 */
/**
 * Created by lenovo on 2017/11/15.
 */
import React, {Component} from 'react';

class Lists extends Component {
  render() {
    return <ul>
      {this.props.lists.map((e, i) => {
        return <li key={i}>{e.desc}</li>
      })}
    </ul>;
  }
}

export default Lists;