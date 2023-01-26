const arr = [2, 1, 3, 10];

// 인자에서 두번째 인자에 첫번째 인자를 뺀값을 return 하면 내림차순 정렬이 된다.
arr.sort((a, b) => {
  return a - b;
});

console.log(arr);
