import { reduxActionTypes } from "reducers/reduxActionTypes";

export const setReduxPosts = (posts) => ({
    type:reduxActionTypes.SET_POSTS,
    payload:{
      posts,
    }
  });
  export const getMoreReduxPosts = (posts) => ({
    type:reduxActionTypes.GET_MORE_POSTS,
    payload:{
      posts,
    }
  });
  export const hasMoreReduxPosts = (hasMore) => ({
    type:reduxActionTypes.HAS_MORE_POSTS,
    payload:{
      hasMore,
    }
  });