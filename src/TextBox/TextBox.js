import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  SendButton,
  SendButtonContainer,
  TextBoxContainer,
  TextInput,
  TextInputContainer,
} from "./style";

TextBox.propTypes = {
  onSend: PropTypes.func,
};

function TextBox(props) {
  const [inputValue, setInputValue] = useState("");
  const disableSendButton = inputValue.length == 0;

  const handleSendMessage = () => {
    if (!disableSendButton) {
      props.onSend && props.onSend(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSendMessage();
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <TextBoxContainer>
      <TextInputContainer>
        <TextInput
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </TextInputContainer>
      <SendButtonContainer disabled={disableSendButton}>
        <SendButton disabled={disableSendButton} onClick={handleSendMessage}>
          Send
        </SendButton>
      </SendButtonContainer>
    </TextBoxContainer>
  );
}

export default TextBox;
