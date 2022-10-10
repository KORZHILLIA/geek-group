import { createReducer } from "@reduxjs/toolkit";
import { addLike, removeLike } from "./likesActions";

const likesReducer = createReducer(0, {
  [addLike]: (store) => store + 1,
  [removeLike]: (store) => {
    if (!store) {
      return 0;
    }
    return store - 1;
  },
});

export default likesReducer;
