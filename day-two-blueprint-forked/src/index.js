class ArrayUtilities {
  /* Your magic here */
  static addZeros = numList => numList.map(num => num * 10);
  static moreThanFifty = numList => numList.filter(num => num > 50);
  static removeFirst = numList => numList.slice(1);
  static sumAll = numList => numList.reduce((sum, current) => sum + current, 0);
  /* {
    let result = 0;
    numList.forEach(num => (result += num));
    return result;
  }; */
  static divide = num => `${num}`.split("");
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
