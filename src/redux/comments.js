import { type } from "@testing-library/user-event/dist/type";
import { COMMENTS } from "../shared/comments";

export const Comments = (state = COMMENTS, action) => {
  switch(type.action) {
    default: 
    return state;
  }
}
