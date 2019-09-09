function power(power){
  function multiply(number){
    return number*power
  }
  return multiply
}

var toThePowerOfTwo = power(2)
var toThePowerofThree = power(3)
console.log(toThePowerOfTwo(2))
console.log(toThePowerofThree(3))
