import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from '../../components/Counter'
import counter from '../../reducers'

const store = createStore(counter);

export default class App extends React.Component {
  render() {
    return <Counter
      value={this.props.store.getState()}
      onIncrement={() => this.props.store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => this.props.store.dispatch({ type: 'DECREMENT' })}
    />
  }
}

