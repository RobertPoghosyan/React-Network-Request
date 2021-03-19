import { reduxActionTypes } from "reducers/reduxActionTypes";

export const setReduxTodos = (posts) => ({
    type:reduxActionTypes.SET_POSTS,
    payload:{
      posts,
    }
  });
  export const getMoreReduxTodos = (posts) => ({
    type:reduxActionTypes.GET_MORE_POSTS,
    payload:{
      posts,
    }
  });
  export const hasMoreReduxTodos = (hasMore) => ({
    type:reduxActionTypes.HAS_MORE_POSTS,
    payload:{
      hasMore,
    }
  });