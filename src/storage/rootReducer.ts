import { combineReducers } from '@reduxjs/toolkit';
import todosSlice from './slice/todos';

const rootReducer = combineReducers({
  todos: todosSlice,
});

export default rootReducer;
