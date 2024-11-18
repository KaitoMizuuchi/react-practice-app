import React, { useState } from "react";
import TextInput from "../feature/contact/components/TextInput";
import TextArea from "../feature/contact/components/TextArea";
import Button from "../components/Button";
import { validationRequired } from "../utils/validation";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  // 入力内容の状態管理
  const [inputData, setInputData] = useState({
    name: "",
    mail: "",
    content: "",
  });
  const handleInputChange = (id, value) => {
    setInputData({ ...inputData, [id]: value });
  };

  // 確認画面に遷移する
  const [isConfirm, setIsConfirm] = useState(false);
  const [error, setError] = useState({});

  // バリデーションロジックの処理
  const validatedInput = () => {
    const errors = {};
    errors.name = validationRequired(inputData.name, "お名前");
    errors.mail = validationRequired(inputData.mail, "メールアドレス");
    errors.content = validationRequired(inputData.content, "お問い合わせ内容");

    return errors;
  };

  // 「確認画面へ」をを押したときの処理
  const toggleTransition = () => {
    const errors = validatedInput();
    // errorsの中身に文字列がないか確認する。
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      setError(errors);
      return;
    }

    setError({});
    setIsConfirm(true);
  };

  //「送信」ボタンを押したときの処理
  const navigate = useNavigate();
  const handleSend = () => {
    window.confirm(
      `name：${inputData.name}\nmail：${inputData.mail}\ncontent：${inputData.content}\n上記の内容で送信します。`
    );
    navigate("/home");
  };

  return (
    <div className="p-contact">
      <h1 className="p-contact__title">お問い合わせ</h1>
      <form className="p-contact__form">
        <TextInput
          id="name"
          value={inputData.name}
          label="お名前"
          placeholder="名前を入力"
          isRequired
          handleInputChange={handleInputChange}
          isConfirm={isConfirm}
          errorMsg={error.name}
        />
        <TextInput
          id="mail"
          value={inputData.mail}
          label="メールアドレス"
          placeholder="メールアドレスを入力"
          isRequired
          handleInputChange={handleInputChange}
          isConfirm={isConfirm}
          errorMsg={error.mail}
        />
        <TextArea
          id="content"
          value={inputData.content}
          label="お問い合わせ内容"
          placeholder="お問い合わせ内容を入力"
          isRequired
          handleInputChange={handleInputChange}
          isConfirm={isConfirm}
          errorMsg={error.content}
        />
        <div className="p-contact__form-btn-wrapper">
          {!isConfirm ? (
            <Button
              width="170px"
              label="確認画面へ"
              onButtonClick={toggleTransition}
            />
          ) : (
            <>
              <Button
                width="170px"
                label="戻る"
                className="p-content__form-send-btn"
                onButtonClick={() => setIsConfirm(false)}
              />
              <Button
                width="170px"
                label="送信"
                className="p-content__form-send-btn --blue"
                onButtonClick={handleSend}
              />
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
