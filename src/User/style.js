import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 10px;
  border-bottom: 1px solid #d6d6d6;
  cursor: pointer;
  ${(props) => props.selected && "background-color: #e7e7e7;"}
`;

export const AvatarContainer = styled.div`
  display: flex;
  margin-inline-end: 15px;
`;

export const Avatar = styled.img`
  width: 50;
  height: 50px;
  border-radius: 50%;
`;

export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserNameContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
  font-size: 16px;
`;

export const LastMessageContainer = styled.div`
  display: flex;
  font-size: 12px;
`;

export const DateContainer = styled.div`
  display: flex;
  font-size: 12px;
  margin-inline-start: 10px;
`;

export const LastMessageContentContainer = styled.div`
  max-width: 130px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
