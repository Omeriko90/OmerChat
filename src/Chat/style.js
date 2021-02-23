import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  position: relative;
  margin: 0px auto;
  background-color: #dfdfdf;
  width: 1400px;
  height: 800px;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  border-radius: 10px;
`;

export const MessageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #d6d6d6;
  justify-content: center;
`;
