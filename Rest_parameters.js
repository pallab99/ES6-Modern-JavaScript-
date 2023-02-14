function sum(x, ...num) {
  console.log(num);
  let total = 0;
  for (let n of num) total += n;
  return total + x;
}

console.log(sum(7, 1, 2, 3));
