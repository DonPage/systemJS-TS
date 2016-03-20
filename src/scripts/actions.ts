export function adding(...numbers: Array<number>) {
  let result = 0;
  let addNums = new Promise.resolve(numbers.forEach(number => { result += number }));


}
