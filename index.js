// sum funcition

function sum(a, b) {
  return a + b;
}

//module.exports = sum;

function minus(a, b) {
  return a - b;
}

function getEvenNumbers(nums) {
  //return an array of only the even numbers in the given array
  let arr = [];
  nums.forEach(function(num) {
      if (num % 2 === 0) {
        arr.push(num);
      }
    });
  return arr;  //   YOU HAVE TO RETURN IT!!
  };

module.exports = {
  sum,
  minus,
  getEvenNumbers
};
