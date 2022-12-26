class HashTable {
  buckets: any[] = [];
  numBuckets: number;

  constructor(size?: number) {
    this.buckets = new Array(size);
    this.numBuckets = this.buckets.length;
  }

  hash(key: string) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    const bucket = total % this.numBuckets;
    return bucket;
  }

  insert(key: string, value: any) {
    const index = this.hash(key);
    if (!this.buckets[index]) this.buckets[index] = []

    this.buckets[index].push([key, value]);
  }

  get(key: string) {
    const index = this.hash(key);

    if (!this.buckets[index]) return null;

    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        return this.buckets[index][i][1];
      }
    }
  }
}

const hasTable = new HashTable(1);

hasTable.insert('cristian', {
  name: 'Cristian',
  age: 30,
  email: 'cfrancobedoy@gmail.com'
});

hasTable.insert('santiago', {
  name: 'Santiago',
  age: 26,
  email: 'info@centraldelbarbero.com',
});

console.log(hasTable.get('cristian'))