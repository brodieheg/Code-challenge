const findSum = function(array) {
    var sum = 0;
     for (var i=0; i<arr.length; i++)
   { sum = sum + arr[i];}
   return sum;
    }};

const findFrequency = function(array) {

    {const stringsLower = array.map(element => {
        return element.toLowerCase();
      });
        var frequency = {most: {letter:"", amount: 0}, least: {letter:"", amount: Infinity}}
for (let i = 0; i < stringsLower.length; i++) {
    const elementI = stringsLower[i];
    var count = 0;
    for (let j = 0; j < stringsLower.length; j++) {
        var elementJ = stringsLower[j];
        if (elementJ == elementI){count++};
       
    }
    if (count > frequency.most.amount){frequency.most.amount = count; frequency.most.letter = elementI}
    if (count <= frequency.least.amount){frequency.least.amount = count; frequency.least.letter = elementI}
    
}
var frequencyWithoutCount = {most: frequency.most.letter, least: frequency.least.letter};
return frequencyWithoutCount}
}
};

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
