// Open Hashing
// Seperate Chaining

class HashTableOH {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    return index % this.size;
  }

  set(key, value) {
    const bucket = [key, value];
    const index = this.hash(key);

    if (this.table[index]) this.table[index].push(bucket);
    else this.table[index] = [bucket];
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index].find((val) => val[0] === key)[1];
  }
}

const tableOH = new HashTableOH(10);
tableOH.set("name", "Liston");
tableOH.set("mane", "Fermi");
tableOH.set("game", "HHH");

console.log(tableOH.get("name"));
console.log(tableOH.get("mane"));
console.log(tableOH.get("game"));

class HashTableCH {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    index = index % this.size;

    for (let i = 0; i < this.table.length; i++) {
      if (index + i === undefined) return index;
    }
    return "Failed to hash";
  }

  set(key, value) {
    const bucket = [key, value];
    const index = this.hash(key);
    if (typeof index === "string") return console.log(index);
    this.table[index] = bucket;
  }
}
