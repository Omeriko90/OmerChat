import { combineReducers } from "redux";
import message from "./message";
import user from "./user";

const chat = combineReducers({ message, user });

export default chat;
