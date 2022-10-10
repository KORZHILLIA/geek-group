import { combineReducers } from "@reduxjs/toolkit";
import likesReducer from "./likes/likesReducer";

const rootReducer = combineReducers({
  likes: likesReducer,
});

export default rootReducer;
