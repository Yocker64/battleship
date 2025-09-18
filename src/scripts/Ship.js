class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.alive = true;
  }

  takeHit() {
    this.hits += 1;
  }

  isSunk() {
    if (this.hits >= this.length) {
      this.alive = false;
    }
  }
}
