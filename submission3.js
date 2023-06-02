const findSum = function(array) {
    var sum = 0;
     for (var i=0; i<array.length; i++)
   { sum = sum + array[i];}
   return sum;};

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
};

const isPalindrome = function(str) {
 var forward = str.split('');
    var backward = str.split('');
    backward.reverse();
    for (let i = 0; i < forward.length; i++) {
        const element = forward[i];
        if (element !== backward[i]){
            return false
           }
           else {return true}
    }};

const largestPair = function(array) {
    var products = []
    for (let i = 0; i < array.length - 1; i++) {
        const element = array[i];
         products.push(element * array[i + 1]);
         debugger;
    }
    products.sort(function (a, b) {return a - b});
    return products[products.length - 1];};

const removeParenth = function(str) {
    var inputAsArray =  str.split('');
     var openParenth = inputAsArray.indexOf("(");
     var closeParenth = inputAsArray.indexOf(")");
     var lengthOfParenth = closeParenth - openParenth + 1;
     inputAsArray.splice(openParenth, lengthOfParenth);
     return inputAsArray.join('');};

const scoreScrabble = function(str) {

    var scrabbleWord = str.toLowerCase();
    scrabbleWord = scrabbleWord.split('');
        const onePoint = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'];
        const twoPoints = ['d', 'g'];
        const threePoints = ['b', 'c', 'm', 'p'];
        const fourPoints = ['f', 'h', 'v', 'w', 'y']
        const fivePoints = ['k'];
        const eightPoints = ['j', 'x'];
        const tenPoints = ['q', 'z']
       return scrabbleWord.reduce(function (acc, current) {
    
            if (onePoint.includes(current)){
                acc++;
            }
            else if (twoPoints.includes(current)){
                acc += 2;
            }
            else if (threePoints.includes(current)){
                acc += 3;
            }
            else if (fourPoints.includes(current)){
                acc += 4;
            }
            else if (fivePoints.includes(current)){
                acc += 5;
            }
            else if (eightPoints.includes(current)){
                acc += 8;
            }
            else if (tenPoints.includes(current)){
                acc += 10;
            }
            return acc
        }, 0)};
