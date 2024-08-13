function mergeSort(a) {
  if (a.length < 2) return a;

  const m = Math.floor(a.length / 2);
  const leftArr = a.slice(0, m);
  const rightArr = a.slice(m);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) sortedArr.push(leftArr.shift());
    else sortedArr.push(rightArr.shift());
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

const a = [20, -10, 2, 0, 8];
console.log(mergeSort(a));

function bubbleSort(a) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        [a[i], a[i + 1]] = [a[i + 1], a[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return a;
}

const b = [20, -10, 2, 0, 8];
console.log(bubbleSort(b));

function quickSort(a) {
  if (a.length < 2) return a;
  const pivot = a[a.length - 1],
    leftArr = [],
    rightArr = [];

  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] > pivot) rightArr.push(a[i]);
    else leftArr.push(a[i]);
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const c = [20, -10, 2, 0, 8];
console.log(quickSort(c));

function insertionSort(a) {
  for (let i = 1; i < a.length; i++) {
    const NTI = a[i];
    let j= i-1
    while(j>=0 && NTI < a[j]){
        a[j+1] = a[j]
        a[j] = NTI
        j--
    }
  }
  return a
}

const d = [20, -10, 2, 0, 8];
console.log(insertionSort(d));