function quickSort(a) {
  if (a.length < 2) return a;

  const pivot = a[a.length - 1],
    leftArr = [],
    rightArr = [];

  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] < pivot) leftArr.push(a[i]);
    else rightArr.push(a[i]);
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const a = [20, -10, 2, 0, 8];
console.log(quickSort(a));
