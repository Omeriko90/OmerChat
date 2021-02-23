import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.isMyMessage ? "#dcf8c6" : "#fff")};
  align-self: ${(props) => (props.isMyMessage ? "flex-end" : "flex-start")};
  border: 1px solid #f9f9f9;
  border-radius: 15px;
  width: 400px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const MessageContent = styled.div`
  display: flex;
  max-width: 400px;
  text-align: start;
`;

export const MessageFooter = styled.div`
  display: flex;
  align-self: flex-end;
  color: #bdbbbb;
  font-size: 13px;
`;
