const a = [10, 8, 20, -2];

function selectionSort(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        [a[i], a[j]] = [a[j], a[i]];
      }
    }
  }
  return a
}

console.log(selectionSort(a))