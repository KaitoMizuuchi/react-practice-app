

export const formatCurrentDate = () => {
  const now = new Date();

  const month = now.getMonth() + 1;

  const day = now.getDate();

  const hour = now.getHours()

  // 2桁の0詰め
  const minutes = String(now.getMinutes()).padStart(2, "0")

  return `${month}月${day}日 ${hour}:${minutes}`;
}

