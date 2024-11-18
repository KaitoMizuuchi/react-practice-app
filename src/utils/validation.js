
// 入力値が空かどうかチェック
export const validationRequired = (value, fieldName) => {
  if (!value.trim()) {
    return `${fieldName}を入力してください`;
  }
  return "";
}
