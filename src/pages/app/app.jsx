import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { add_count, add_msg, del_count, SanCount } from '../../redux/actions'

export default class App extends Component {

    static propTypes = {
        store: PropTypes.object.isRequired
    }

    addCount = () => {
        const values = this.value.value
        this.props.store.dispatch(add_count(values))
    }
    delCount = () => {
        const values = this.value.value
        this.props.store.dispatch(del_count(values))
    }
    sanCount = () => {
        const values = this.value.value
        this.props.store.dispatch(del_count(values))
    }
    ou = () => {
        const values = this.value.value
        if (values%2 === 0) {
            this.props.store.dispatch(add_count(values))
        }
    }
    addMsg = () => {
        const msg = this.input.value
        this.props.store.dispatch(SanCount(msg))
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
                   <button onChange={ this.addMsg }>添加消息</button>
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
