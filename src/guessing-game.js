class GuessingGame {
    constructor() {}

  minNum;
  maxNum;
  guessNum;

    setRange(min, max) {
      this.minNum = min;
      this.maxNum = max;
    }

    guess() {
      this.guessNum = Math.round((this.minNum + this.maxNum) / 2);
      return this.guessNum;
    }

    lower() {
      this.maxNum = this.guessNum;
    }

    greater() {
      this.minNum = this.guessNum;
    }
}

module.exports = GuessingGame;
