import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MessagesContainer } from "./style";
import { getMessages } from "store/actions";
import Message from "components/Message/Message";

MessagesBox.propTypes = {
  user: PropTypes.object,
};

function MessagesBox(props) {
  return (
    <MessagesContainer>
      {props.messages?.map((message, index) => {
        return (
          <Message
            sender={message.sender}
            content={message.content}
            timeStamp={message.timeStamp}
            key={index}
          />
        );
      })}
    </MessagesContainer>
  );
}

const mapDispatch = { getMessages };
const mapState = (state, props) => {
  const messages = state.message[props.user.userId]?.messages;
  return { messages };
};

export default connect(mapState, mapDispatch)(MessagesBox);
