/**
 * Created by lenovo on 2017/11/15.
 */
import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  border: 1px solid red;
  display: inline-block;
`;

class StatusList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusList: [],
    }
  }

  componentWillReceiveProps(props) {
    let status = this.state.statusList.filter(status => status.step === props.step);

    let statusList = [...this.state.statusList];

    if (status[0]) {
      props.onClick(Object.assign(status[0]));
      if (props.isAdd) {
        statusList = statusList.slice(0, props.step);
        this.setState({
          statusList: statusList
        })
      }

    } else {
      statusList = statusList.slice(0, props.step);
      statusList.push({
        lists: props.lists,
        step: props.step,
        onClick: props.onClick
      });
      this.setState({
        statusList: statusList
      })
    }
  }

  render() {
    return <Container>
      {this.state.statusList.map((status, i) => <li key={i}>
        <button onClick={(e) => {
          e.nativeEvent.stopPropagation();
          status.onClick(status)
        }}>#step is: step {status.step}</button>
      </li>)}
    </Container>
  }
}


export default StatusList;