function getRandomNumber(min, max) {
  const a = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(a)
  return a;
}
export default getRandomNumber;
