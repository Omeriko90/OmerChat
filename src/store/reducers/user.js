import { REDUCER_LABEL as Labels } from "constants/reducer.js";

const users = [
  {
    userId: "1",
    userName: "Yarden Levin",
    avatar: "/images/gril-indoor.jpg",
    lastMessage: {
      sender: "Yarden",
      timeStamp: new Date(),
      content: "how are you?",
    },
  },
  {
    userId: "2",
    userName: "Omer Shalom",
    avatar: "/images/boy.jpg",
    lastMessage: {
      sender: "Omer",
      timeStamp: new Date(),
      content: "how are you feeling?",
    },
  },
  {
    userId: "3",
    userName: "Olivia Hertz",
    avatar: "/images/dog.jpg",
    lastMessage: {
      sender: "Olivia",
      timeStamp: new Date(),
      content: "where were you last night?",
    },
  },
  {
    userId: "4",
    userName: "Emma David",
    avatar: "/images/girl-outdoor.jpg",
    lastMessage: {
      sender: "",
      timeStamp: new Date(),
      content: "Cant talk now. Call you later",
    },
  },
  {
    userId: "5",
    userName: "William Cohen",
    avatar: "/images/william.jpg",
    lastMessage: {
      sender: "",
      timeStamp: new Date(),
      content: "that's an option",
    },
  },
  {
    userId: "6",
    userName: "James Rodrigez",
    avatar: "/images/james.jpg",
    lastMessage: {
      sender: "James",
      timeStamp: new Date(),
      content: "hhhh",
    },
  },
  {
    userId: "7",
    userName: "Lucas Vascez",
    avatar: "/images/lucas.jpg",
    lastMessage: {
      sender: "Lucas",
      timeStamp: new Date(),
      content: "ok, call me when you can...",
    },
  },
  {
    userId: "8",
    userName: "Amelia Straus",
    avatar: "/images/amelia.jpg",
    lastMessage: {
      sender: "Amelia",
      timeStamp: new Date(),
      content: "tnx :)",
    },
  },
  {
    userId: "9",
    userName: "Charlotte May",
    avatar: "/images/charlotte.jpg",
    lastMessage: {
      sender: "Charlotte",
      timeStamp: new Date(),
      content: "i don't know",
    },
  },
  {
    userId: "10",
    userName: "Noah Shalom",
    avatar: "/images/noah.jpg",
    lastMessage: {
      sender: "Noah",
      timeStamp: new Date(),
      content: "ok' but hurry up pls..",
    },
  },
  {
    userId: "11",
    userName: "Isabella Menahem",
    avatar: "/images/isabella.jpg",
    lastMessage: {
      sender: "",
      timeStamp: new Date(),
      content: "yeah, 14 at my place",
    },
  },
];

const user = (state = users, action) => {
  switch (action.type) {
    case Labels.getUsers:
      return state;
    case Labels.setUser:
      return updateChatLastMessage(state, { ...action.payload });
    default:
      return state;
  }
};

function updateChatLastMessage(state, { userId, message }) {
  const userIndex = state.findIndex((user) => user.userId == userId);
  const currentUsers = state;
  const currentUser = state[userIndex];
  currentUser.lastMessage = message;
  state[userIndex] = { ...currentUsers[userIndex], ...currentUser };

  return state;
}

export default user;
