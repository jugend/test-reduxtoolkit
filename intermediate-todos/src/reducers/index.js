import { combineReducers } from 'redux'
// import todos from './todos'
import todosReducer from '../features/todos/todosSlice'
import filterReducer from '../features/filter/filterSlice'

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: filterReducer,
})
