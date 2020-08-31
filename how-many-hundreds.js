const howManyHundreds = function(count) {
  const boxes = (count - (count % 100)) / 100;
  return boxes;
}