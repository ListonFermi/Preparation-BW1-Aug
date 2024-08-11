// - endlessly yield random elements from array (partially done)

function* randomNums(a) {
  while (true) {
    yield a[Math.floor(Math.random() * 10) % a.length];
  }
}

const a = [12, 5, 8, 8, 7, 5, 5, 65, 4, 778];
const gen = randomNums(a);
console.log(gen.next().value);