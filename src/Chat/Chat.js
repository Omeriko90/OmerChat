import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import UsersList from "components/UsersList";
import { ChatContainer, MessageContainer } from "./style";
import MessagesBox from "components/MessagesBox";
import TextBox from "components/TextBox";
import { addMessage, updateChatLastMessage } from "store/actions";

function Chat(props) {
  const [currentChatUser, setCurrentChatUser] = useState("");
  const [isMessageFromMe, setIsMessageFromMe] = useState(true);

  useEffect(() => {
    if (props.users && props.users.length > 0) {
      setCurrentChatUser(props.users[0]);
    }
  }, [props.users]);

  const handleChatSelection = (user) => {
    setCurrentChatUser(user);
  };

  const handleNewMessage = (textValue) => {
    const newMessage = {
      sender: isMessageFromMe ? "" : currentChatUser.userName,
      userId: currentChatUser.userId,
      content: textValue,
      timeStamp: new Date(),
    };
    setIsMessageFromMe((prevState) => !prevState);
    props.addMessage(newMessage);
    props.updateChatLastMessage(currentChatUser.userId, newMessage);
  };

  return (
    <ChatContainer>
      <UsersList
        selectedUser={currentChatUser}
        users={props.users}
        onUserSelection={handleChatSelection}
      />
      <MessageContainer>
        <MessagesBox user={currentChatUser} />
        <TextBox onSend={handleNewMessage} />
      </MessageContainer>
    </ChatContainer>
  );
}

const mapDispatch = { addMessage, updateChatLastMessage };
const mapState = (state) => {
  const users = state.user;

  return { users };
};

export default connect(mapState, mapDispatch)(Chat);
