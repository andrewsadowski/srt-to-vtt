import { combineReducers } from "redux";
//Import Reducers below
import fileReducer from "./components/reducer";

const rootReducer = combineReducers({ fileReducer });

export default rootReducer;
