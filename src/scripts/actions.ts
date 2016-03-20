export function adding(...numbers:Array<number>) {
  let result: any = 0;
  return new Promise<any>(resolve => {
    numbers.forEach(number => result += number);
    resolve(result);
  });
  // addNums.then((res => {
  //   console.log('res ', res)
  // }));
}
