import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'

// import { createStore } from 'redux'
// import counter from './reducers'
// const store = createStore(counter)

// With Redux Toolkit
import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1,
    },
})

const store = configureStore({
    reducer: counterSlice.reducer,
})

const rootEl = document.getElementById('root')

// const render = () => ReactDOM.render(
//   <Counter
//     value={store.getState()}
//     onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//     onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//   />,
//   rootEl
// )

const { increment, decrement } = counterSlice.actions

const render = () =>
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch(increment())}
            onDecrement={() => store.dispatch(decrement())}
        />,
        rootEl,
    )

render()
store.subscribe(render)
