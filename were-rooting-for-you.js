function judgeVegetable(vegetables, metric) {
  let winner;
  let max = 0;
  for (let veggie of vegetables) {
    if (veggie[metric] > max) {
      max = veggie[metric];
      winner = veggie.submitter;
    }
  }
  return winner;
}