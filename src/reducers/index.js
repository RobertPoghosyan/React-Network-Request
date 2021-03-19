import {createStore,combineReducers} from 'redux';
import postReducer from './postReducer';
import countReducer from './countReducer';
import todosReducer from './todosReducer';

// const initialState = {
//     count:0,
//     posts:null,
//     hasMore:true,
//   }
  
  const reducers = combineReducers({
      postsData: postReducer,
      count: countReducer,
      todosData:todosReducer,
  })
  
  export const store = createStore(reducers);