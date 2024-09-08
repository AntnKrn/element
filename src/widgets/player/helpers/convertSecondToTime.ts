export const secondsToTime = (inputSeconds: string) => {
  const sec_num = parseInt(inputSeconds, 10);
  let minutes: string | number = Math.floor((sec_num - 0 * 3600) / 60);
  let seconds: string | number = sec_num - 0 * 3600 - minutes * 60;

  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return +minutes + ':' + seconds;
};
