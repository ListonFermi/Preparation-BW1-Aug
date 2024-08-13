/*
It is an in-place sorting algorithm (It doesn't need extra space)
*/
function insertionSort(a) {
  for (let i = 1; i < a.length; i++) {
    const NTI = a[i];
    let j = i - 1;
    while (j >= 0 && NTI < a[j]) {
      a[j + 1] = a[j];
      a[j] = NTI;
      j--;
    }
  }
  return a;
}

const a = [8, 20, 2, -10];
console.log(insertionSort(a));