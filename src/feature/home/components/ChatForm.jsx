import React, { useContext } from "react";
import { ChatContext } from "../../../pages/Home";
import Button from "../../../components/Button";

const ChatForm = ({ handleInputChange, onButtonClick, error }) => {
  const { inputData } = useContext(ChatContext);
  return (
    <form className="p-chat__form">
      {/* 送信者のステータス選択欄 */}
      <select
        name="status"
        id="status"
        className="p-chat__form-select"
        value={inputData.status}
        onChange={(e) => handleInputChange(e.target.id, e.target.value)}
      >
        <option value="you">you</option>
        <option value="me">me</option>
      </select>
      {/* メッセージ入力欄 */}
      <div className="p-chat__form-input-wrapper">
        <input
          type="text"
          id="msg"
          className="p-chat__form-input"
          value={inputData.msg}
          onChange={(e) => handleInputChange(e.target.id, e.target.value)}
        />
        {error && error.msg !== "" ? (
          <p className="p-chat__form-input-error">{error.msg}</p>
        ) : null}
      </div>
      <div className="p-chat_form-btn-wrapper">
        <Button width="120px" label="送信" onButtonClick={onButtonClick} />
      </div>
    </form>
  );
};

export default ChatForm;
