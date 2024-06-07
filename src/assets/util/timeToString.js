export const timeToString = (time) => {
  const month = String(time.getMonth() + 1);
  const date = String(time.getDate());

  return `${time.getFullYear()}.${month.length < 2 ? `0${month}` : month}.${
    date.length < 2 ? `0${date}` : date
  } ${time.toLocaleTimeString().slice(3)}`;
};
