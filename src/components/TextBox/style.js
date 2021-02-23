import styled from "styled-components";

export const TextBoxContainer = styled.div`
  display: flex;
  border-top: 1px solid #d6d6d6;
  background-color: #f0eeec;
  height: 65px;
  padding: 0 10px;
  border-radius: 0 0 10px 0;
`;

export const TextInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  flex: 1 1 auto;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  margin: auto 0;
  margin-inline-end: 15px;
  background-color: #fff;
`;

export const TextInput = styled.input`
  display: flex;
  background-color: #fff;
  width: 100%;
  border: 0;
  outline-width: 0 !important;
`;

export const SendButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70px;
  border-radius: 20px;

  ${(props) =>
    props.disabled
      ? `cursor: not-allowed;
  opacity: 0.7;`
      : `cursor: pointer;
  `}
`;

export const SendButton = styled.button`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 0;
  background-color: #008cba;
  color: #fff;

  ${(props) =>
    props.disabled
      ? `cursor: not-allowed;`
      : `cursor: pointer;
  `}
`;
