const finalPosition = function (moves) {
  const result = [0, 0];
  for (const move of moves) {
    if (move === 'north') {
      result[1] += 1;
    } else if (move === 'south') {
      result[1] -= 1;
    } else if (move === 'east') {
      result[0] += 1;
    } else if (move === 'west') {
      result[0] -= 1;
    }
  }
  return result;
}
