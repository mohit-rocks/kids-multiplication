function reshuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex > 0) {
    // Pick a random index/
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap the element at currentIndex with the one at randomIndex.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
export default reshuffle;
