/**
 * Created by lenovo on 2017/11/15.
 */
import React, {Component} from 'react';
import ButtonList from './components/ButtonList';
import Lists from './components/Lists';
import StatusList from './components/StatusList';

class Flow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [{
        desc: 'add list name is button1',
        id: 'btn1',
        name: 'btn1',
        onClick: () => this.onClick('btn1')
      },
        {
          desc: 'add list name is button2',
          id: 'btn2',
          name: 'btn2',
          onClick: () => this.onClick('btn2')
        },
        {
          desc: 'add list name is button3',
          name: 'btn3',
          id: 'btn3',
          onClick: () => this.onClick('btn3')
        }],

      lists: [],

      step: 0,

      isAdd: true
    }
  }
  onClick(id) {
    let lists = [...this.state.lists];
    let item = this.state.buttons.filter(item => item.id === id);
    item[0] && lists.push(item[0]);
    let step = this.state.step;
    let buttons = this.state.buttons;
    console.log('lists: ', lists);


    this.setState({
      buttons: buttons,
      lists: lists,
      step: ++step,
      isAdd: true
    });
  }


  refreshLists({lists, step}) {
    if (step === this.state.step) return;
    this.setState({
      lists: lists,
      step: step,
      isAdd: false
    });
  }
  render() {
    return <div>
      {/*<h1>this.state.lists is : {[...this.state.lists]}</h1>*/}
      <ButtonList buttons={this.state.buttons} />
      <StatusList lists={this.state.lists} step={this.state.step} onClick={this.refreshLists.bind(this)} isAdd={this.state.isAdd}/>
      <Lists lists={this.state.lists}/>
    </div>
  }
}

export default Flow;