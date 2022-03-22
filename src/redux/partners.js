import { actions } from "react-redux-form";
import {PARTNERS} from "../shared/partners";

export const Partners = (state = PARTNERS) => {
  switch(actions.type) {
    default: 
    return state;
  }
}