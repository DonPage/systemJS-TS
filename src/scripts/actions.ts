export function adding(...numbers:Array<number>) {
  let result: number = 0;
  return new Promise<any>(resolve => {
    numbers.forEach(number => result += number);
    resolve(result);
  });
}
