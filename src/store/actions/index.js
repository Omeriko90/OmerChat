import { REDUCER_LABEL as Labels } from "constants/reducer";

export function getUsersList() {
  return {
    type: Labels.getUsers,
    payload: [],
  };
}

export function getMessages(userId) {
  return {
    type: Labels.getMessage,
    payload: userId,
  };
}

export function addMessage(message) {
  return {
    type: Labels.addMessage,
    payload: message,
  };
}

export function updateChatLastMessage(userId, message) {
  return {
    type: Labels.setUser,
    payload: { userId, message },
  };
}
