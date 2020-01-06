const assert = require("assert");

// Feel free to look things up online!

// TODO - write a function which converts a multi-word string into an array of words
const tokenize = str => {
  return str.split(' ')
};

// TODO - write a function which reverses the string
const reverse = str => {
  const chars = str.split('')
  return chars.reverse().join('')
};

// TODO - write a function which returns the inputted array without duplicate elements
const filterUnique = (value, index, self) => {
  return self.indexOf(value) === index
}

const uniqueOnes = arr => {
  return arr.filter(filterUnique)
};

// TODO - write a function which returns the factorial of a positive integer
const factorial = num => {
  let prod = 1
  while (num > 0) {
    prod *= num
    num -= 1
  }
  return prod
};

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return -1
  }
  let res = []
  for (let i = 0; i < arr1.length; i++) {
    newArr = []
    newArr.push(arr1[i])
    newArr.push(arr2[i])
    res.push(newArr)
  }

  return res
};

// TODO - Write a function which does the opposite of `zip()`
const unzip = arr => {
  arr1 = []
  arr2 = []
  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i][0])
    arr2.push(arr[i][1])
  }
  return [arr1, arr2]
};

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftThree("Hello") === "lloHe"
const shiftRight = (str, num) => {
  const chars = str.split('')
  const len = str.length
  for (i = 0; i < len; i++) {
    let newPos = (i + num) % len
    chars[newPos] = str[i]
  }

  return chars.join('')
};

// TODO - write a function which returns the current date in the following format:
// "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
months = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
}

const dayAsWord = date => {
  if (date == 1) {
    return "1st"
  } else if (date == 2) {
    return "2nd"
  } else if (date == 3) {
    return "3rd"
  } else {
    return date.toString() + "th"
  }
}

const hours = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"]
const lowTimes = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
const teenTimes = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eightteen", "nineteen"]
const highTimes = ["oh ", "", "twenty","thirty","forty","fifty"]

const announceDate = () => {
  const d = new Date()
  const m = d.getMonth()
  const day = d.getDate()
  const y = d.getFullYear()
  const h = d.getHours()
  const min = d.getMinutes()

  const hourName = hours[h % 12]
  const minuteNameTens = (min >= 10 && min < 20 ? teenTimes[min - 10] : highTimes[Math.floor(min / 10)])
  const minuteNameOnes = (min >= 10 && min < 20 ? "" : lowTimes[min % 10])
  const dash = (min == 0 || min > 20 && min % 10 != 0 ? "-" : "")
  const oclock = (min == 0 ? "o-clock" : "")

  console.log(minuteNameTens)

  const time = hourName + " " + oclock + minuteNameTens + dash + minuteNameOnes
  const ampm = (h < 12 ? "morning" : (h < 18 ? "afternoon" : "evening"))

  console.log("Today's date is " + months[m] + " " + dayAsWord(day) + ", " + y + ". It is " + time + " in the " + ampm + ".")

};

// Write tests here:
console.log(tokenize("First second third"))
assert(reverse("abc") === "cba")
console.log(uniqueOnes([1,1,2,3,5,5,5,7]))
assert(factorial(4) === 24)
console.log(zip([1,2,3],[3,2,1]))
console.log(unzip([[3,4],[5,1],[2,3],[9,0]]))
assert(shiftRight("Hello", 3) === "lloHe")
announceDate()