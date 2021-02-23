import { REDUCER_LABEL as Labels } from "constants/reducer.js";
const tempMessages = {
  1: {
    messages: [
      { sender: "Yarden", timeStamp: new Date(), content: "hi" },
      { sender: "", timeStamp: new Date(), content: "hello" },
      { sender: "Yarden", timeStamp: new Date(), content: "how are you?" },
    ],
  },
  2: {
    messages: [
      { sender: "Omer", timeStamp: new Date(), content: "hi" },
      { sender: "", timeStamp: new Date(), content: "alloah" },
      {
        sender: "Omer",
        timeStamp: new Date(),
        content: "how are you feeling?",
      },
    ],
  },
  3: {
    messages: [
      { sender: "Olivia", timeStamp: new Date(), content: "hi" },
      { sender: "", timeStamp: new Date(), content: "hello" },
      {
        sender: "Olivia",
        timeStamp: new Date(),
        content: "where were you last night?",
      },
    ],
  },
  4: {
    messages: [
      { sender: "Emma", timeStamp: new Date(), content: "hi" },
      {
        sender: "",
        timeStamp: new Date(),
        content: "Cant talk now. Call you later",
      },
    ],
  },
  5: {
    messages: [
      {
        sender: "William",
        timeStamp: new Date(),
        content: "are you free tomorrow night?",
      },
      { sender: "", timeStamp: new Date(), content: "probably, why?" },
      {
        sender: "William",
        timeStamp: new Date(),
        content: "just wanted to know if you wanna watch Hapoel together?",
      },
      {
        sender: "",
        timeStamp: new Date(),
        content: "that's an option",
      },
    ],
  },
  6: {
    messages: [
      { sender: "James", timeStamp: new Date(), content: "hi" },
      { sender: "", timeStamp: new Date(), content: "hi to you too" },
      {
        sender: "James",
        timeStamp: new Date(),
        content: "hhhh",
      },
    ],
  },
  7: {
    messages: [
      { sender: "Lucas", timeStamp: new Date(), content: "Can you talk?" },
      { sender: "", timeStamp: new Date(), content: "mmm give me few minutes" },
      {
        sender: "Lucas",
        timeStamp: new Date(),
        content: "ok, call me when you can...",
      },
    ],
  },
  8: {
    messages: [
      {
        sender: "Amelia",
        timeStamp: new Date(),
        content: "babe, can u bring milk when you get back from work",
      },
      { sender: "", timeStamp: new Date(), content: "sure babe" },
      {
        sender: "Amelia",
        timeStamp: new Date(),
        content: "tnx :)",
      },
    ],
  },
  9: {
    messages: [
      { sender: "Charlotte", timeStamp: new Date(), content: "hi" },
      { sender: "", timeStamp: new Date(), content: "hi" },
      {
        sender: "Charlotte",
        timeStamp: new Date(),
        content: "do you here the noise too?",
      },
      {
        sender: "",
        timeStamp: new Date(),
        content: "not really.. what's it sound like?",
      },
      { sender: "Charlotte", timeStamp: new Date(), content: "i don't know" },
    ],
  },
  10: {
    messages: [
      {
        sender: "Noah",
        timeStamp: new Date(),
        content: "did you finished the report?",
      },
      { sender: "", timeStamp: new Date(), content: "not yet" },
      {
        sender: "",
        timeStamp: new Date(),
        content: "it will take me a few more hours",
      },
      {
        sender: "Noah",
        timeStamp: new Date(),
        content: "ok' but hurry up pls..",
      },
    ],
  },
  11: {
    messages: [
      { sender: "Isabella", timeStamp: new Date(), content: "hi" },
      { sender: "", timeStamp: new Date(), content: "hi" },
      {
        sender: "Isabella",
        timeStamp: new Date(),
        content: "we are still meeting today right?",
      },
      { sender: "", timeStamp: new Date(), content: "yeah, 14 at my place" },
    ],
  },
};
const message = (state = tempMessages, action) => {
  switch (action.type) {
    case Labels.addMessage:
      return addMessage(state, action.payload);
    case Labels.getMessage:
      return getMessage(state, action.payload);
    default:
      return state;
  }
};

function addMessage(state, newMessage) {
  const userChat = state[newMessage.userId] || {};
  const currentMessages = userChat.messages || [];
  userChat.messages = [...currentMessages, newMessage];
  state[newMessage.userId] = { ...userChat };
  return { ...state };
}

function getMessage(state, userId) {
  const userChat = state[userId];

  return userChat.messages;
}

export default message;
