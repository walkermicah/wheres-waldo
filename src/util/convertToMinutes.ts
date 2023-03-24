const convertToMinutes = (seconds: number): string => {
  const min = Math.floor(seconds / 60);
  const sec = (seconds % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
};

export default convertToMinutes;
