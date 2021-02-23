import React from "react";
import PropTypes from "prop-types";
import { MessageContainer, MessageContent, MessageFooter } from "./style";

Message.propTypes = {
  sender: PropTypes.string,
  timeStamp: PropTypes.instanceOf(Date),
};

function Message(props) {
  const timeStamp = props.timeStamp.toLocaleTimeString().substring(0, 5);
  const isMessageFromMe = props.sender === "";

  return (
    <MessageContainer isMyMessage={isMessageFromMe}>
      <MessageContent>{props.content}</MessageContent>
      <MessageFooter>{timeStamp}</MessageFooter>
    </MessageContainer>
  );
}

export default Message;
