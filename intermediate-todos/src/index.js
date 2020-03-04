import React from 'react'
import { render } from 'react-dom'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { configureStore } from '@reduxjs/toolkit'

// const store = createStore(rootReducer)
const  store = configureStore({
  reducer: rootReducer
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
