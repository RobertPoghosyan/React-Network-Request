import {createStore} from 'redux';
import { reduxActionTypes } from './reduxActionTypes';

const initialState = {
    count:0,
    posts:null,
    hasMore:true,
  }
  
  const reducer = (state = initialState,action)=>{
    switch(action.type){
        case reduxActionTypes.INCREMENT_COUNT:
            return {
                ...state,
                count:state.count+1
            }
        case reduxActionTypes.DECREMENT_COUNT:
                return {
                ...state,
                count:state.count-1
            }
        case reduxActionTypes.SET_POSTS:
            return {
                ...state,
                posts:action.payload.posts
            }    
        case reduxActionTypes.GET_MORE_POSTS:
            return {
                ...state,
                posts:[...state.posts, ...action.payload.posts]
            }    
        case reduxActionTypes.HAS_MORE_POSTS:
            return {
                ...state,
                hasMore:action.payload.hasMore
            }    
        default:
        return state;  
    }
  }
  
  export const store = createStore(reducer);