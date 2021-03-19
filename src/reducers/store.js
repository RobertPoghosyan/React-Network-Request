import {createStore,combineReducers} from 'redux';
import postReducer from './postReducer';
import countReducer from './countReducer';

// const initialState = {
//     count:0,
//     posts:null,
//     hasMore:true,
//   }
  
  const reducers = combineReducers({
      postsData: postReducer,
      count: countReducer,
  })
  
  export const store = createStore(reducers);