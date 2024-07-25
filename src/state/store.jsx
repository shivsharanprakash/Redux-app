
import { applyMiddleware } from "redux";
import reducer from "./reducer";
import { createStoreHook } from "react-redux";
import { thunk } from "redux-thunk";

export const store=createStoreHook(reducer,{},applyMiddleware(thunk))