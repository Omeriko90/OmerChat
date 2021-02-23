import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  AvatarContainer,
  Container,
  DateContainer,
  LastMessageContainer,
  LastMessageContentContainer,
  UserDetailsContainer,
  UserNameContainer,
} from "./style";

User.propTypes = {
  userImg: PropTypes.string,
  userName: PropTypes.string,
  userId: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  lastMessage: PropTypes.object,
};

function User(props) {
  const { content, timeStamp, sender } = props.lastMessage;
  const lastMessageTime = timeStamp.toLocaleTimeString().substring(0, 5);
  const lastMessageSender = sender || "You";
  const lastMessageContent = `${lastMessageSender}: ${content}`;

  const handleUserClick = () => {
    props.onClick && props.onClick(props.userId);
  };

  return (
    <Container selected={props.selected} onClick={handleUserClick}>
      <AvatarContainer>
        <Avatar src={props.userImg} width={50} height={50} />
      </AvatarContainer>
      <UserDetailsContainer>
        <UserNameContainer>{props.userName}</UserNameContainer>
        <LastMessageContainer>
          <LastMessageContentContainer>
            <span>{lastMessageContent}</span>
          </LastMessageContentContainer>
          <DateContainer>{lastMessageTime}</DateContainer>
        </LastMessageContainer>
      </UserDetailsContainer>
    </Container>
  );
}

export default User;
