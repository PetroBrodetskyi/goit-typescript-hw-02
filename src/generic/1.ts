/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<S, N>(arg1: S, arg2: N): Promise<[S, N]> {
  return new Promise((resolve) => {
    resolve([arg1, arg2]);
  });
}

getPromise('Text', 50)
  .then((data) => {
    console.log(data);
});

export { };

