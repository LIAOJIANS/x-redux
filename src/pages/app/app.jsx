import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { addMsg, addCount, delCount } from '../../redux/actions'

export default class App extends Component {

    static propTypes = {
        store: PropTypes.object.isRequired
    }

    addCount = () => {
        const values = this.value.value
        this.props.store.dispatch(addCount(values))
    }
    delCount = () => {
        const values = this.value.value
        this.props.store.dispatch(delCount(values))
    }
    sanCount = () => {
        const values = this.value.value
        setTimeout(() => {
            this.props.store.dispatch(addCount(values))
        }, 3000)
    }
    ou = () => {
        const values = this.value.value
        if (values%2 === 0) {
            this.props.store.dispatch(addCount(values))
        }
    }
    addMsg = () => {
        const msg = this.input.value
        console.log(msg)
        this.props.store.dispatch(addMsg(msg))
    }
   render() {
        const { count, msgs } = this.props.store.getState()
       console.log(count, msgs)
       return (
           <div>
                <p>综合count：{ count }</p>
               <span>操作数：</span>&nbsp;
               <select ref={ value => this.value = value }>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
               </select>&nbsp;
               <button onClick={ this.addCount }>+</button>&nbsp;
               <button onClick={ this.delCount }>-</button>&nbsp;
               <button onClick={ this.ou }>偶数加选择的数量</button>&nbsp;
               <button onClick={ this.sanCount }>延迟三秒加选择的数量</button>
               <br/>
               <br/>
               <br/>
               <div>
                   <input type="text" placeholder='输入添加的消息' ref={ input => this.input = input }/>&nbsp;
                   <button onClick={ this.addMsg }>添加消息</button>
                   <ul>
                       {
                           msgs.map( (msg, index) => (
                               <li key={ index }>{ msg }</li>
                           ))
                       }
                   </ul>
               </div>
           </div>
       )
   }
}
