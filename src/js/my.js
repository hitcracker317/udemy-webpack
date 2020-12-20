export default () => {
  const obj = { a: 1, b: 2 };
  const objNew = { ...obj, c: 3 };
  // { a: 1, b: 2, c: 3 };
  console.log('myだよ：', objNew);
}
