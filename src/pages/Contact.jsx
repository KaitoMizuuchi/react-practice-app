import React from "react";
import TextInput from "../feature/contact/components/TextInput";
import TextArea from "../feature/contact/components/TextArea";
import Button from "../components/Button";

const Contact = () => {
  return (
    <div className="p-contact">
      <h1 className="p-contact__title">お問い合わせ</h1>
      <form className="p-contact__form">
        <TextInput
          id="name"
          label="お名前"
          placeholder="名前を入力"
          isRequired
        />
        <TextInput
          id="mail"
          label="メールアドレス"
          placeholder="メールアドレスを入力"
          isRequired
        />
        <TextArea
          id="content"
          label="お問い合わせ内容"
          placeholder="お問い合わせ内容を入力"
          isRequired
        />
        <div className="p-contact__form-btn-wrapper">
          <Button width="170px" label="確認画面へ" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
