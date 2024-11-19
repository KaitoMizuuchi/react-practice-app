import React, { createContext, useState } from "react";
import { validationRequired } from "../utils/validation";
import { formatCurrentDate } from "../utils/formatCurrentDate";
import ChatList from "../feature/home/components/ChatList";
import ChatForm from "../feature/home/components/ChatForm";

export const ChatContext = createContext();

const Home = () => {
  // チャット全体のデータを管理
  const [chatData, setChatData] = useState([]);

  // 入力した内容を取得
  const [inputData, setInputData] = useState({
    msg: "",
    date: "",
    status: "you",
  });
  const handleInputChange = (id, value) => {
    setInputData({ ...inputData, [id]: value });
  };

  // バリデーションの状態管理
  const [error, setError] = useState({
    msg: "",
  });

  // formのリセット
  const resetForm = () => {
    setInputData({
      msg: "",
      date: "",
      status: "you",
    });
    setError({});
  };

  // setChatDataにinputDataの情報を入れる。
  const handleSendMessage = (e) => {
    e.preventDefault();
    // バリデーションチェック
    const errors = {};
    errors.msg = validationRequired(inputData.msg, "メッセージ");
    if (errors.msg !== "") {
      setError(errors);
      return;
    }

    // 入力する瞬間の時間をフォーマットを整えた形で取得。
    const newChatData = {
      ...inputData,
      date: formatCurrentDate(),
    };

    setChatData([...chatData, newChatData]);

    // 入力データとエラーのリセット
    resetForm();
  };

  return (
    <ChatContext.Provider value={{ chatData, inputData }}>
      <div className="p-chat">
        <h1 className="p-chat__title">チャット：</h1>
        <ChatList />
        <ChatForm
          handleInputChange={handleInputChange}
          onButtonClick={handleSendMessage}
          error={error}
        />
      </div>
    </ChatContext.Provider>
  );
};

export default Home;
