function calculateRectangleArea(length, width) {
  return length > 0 && width > 0 ? length * width : undefined;
}
function calculateTriangleArea(base, height) {
  return base > 0 && height > 0 ? base * height / 2 : undefined;
}
function calculateCircleArea(radius) {
  return radius > 0 ? Math.PI * Math.pow(radius, 2) : undefined;
}