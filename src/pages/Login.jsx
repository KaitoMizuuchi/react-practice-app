import React, { useState } from "react";
import InputLabel from "../feature/login/components/InputLabel";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //パスワードの状態管理
  const [type, setType] = useState("password");
  const togglePassOpen = () =>
    setType((prevType) => (prevType === "password" ? "text" : "password"));

  // 入力された値の取得
  const [inputData, setInputData] = useState({
    mail: "",
    password: "",
  });

  const handleInputChange = (id, value) => {
    setInputData({ ...inputData, [id]: value });
  };
  console.log(inputData);

  // ログインボタンが押された時の処理
  const navigate = useNavigate();
  const [error, setError] = useState({
    mail: "",
    password: "",
  });
  const handleLogin = () => {
    if (!inputData.mail.trim()) {
      setError((prevError) => ({
        ...prevError,
        mail: "メールアドレスを入力してください",
      }));
    }
    if (!inputData.password.trim()) {
      setError((prevError) => ({
        ...prevError,
        password: "パスワードを入力してください",
      }));
      return;
    }
    navigate("/home");
  };

  console.log(error);

  return (
    <div className="p-login">
      <h1 className="p-login__title">ログイン画面</h1>
      <form className="p-login__form">
        <div className="p-login__form-wrapper">
          <InputLabel
            label="mail:"
            type="text"
            id="mail"
            placeholder="メールアドレスを入力してください"
            value={inputData.mail}
            errorMsg={error.mail}
            handleInputChange={handleInputChange}
          />
          <InputLabel
            label="password"
            type={type}
            id="password"
            placeholder="パスワードを入力してください"
            value={inputData.password}
            errorMsg={error.password}
            isSpace
            handleInputChange={handleInputChange}
            togglePassOpen={togglePassOpen}
          />
        </div>
        <div className="p-login__form-btn-wrapper">
          <Button width="300px" label="ログイン" onButtonClick={handleLogin} />
        </div>
      </form>
    </div>
  );
};

export default Login;
