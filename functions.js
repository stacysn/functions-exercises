// TODO: add your solutions here!
function combineWords (word1, word2){
    return (word1 + word2);
}
var result = combineWords('dog', 'house');
// console.log(result);

function repeatPhrase(phrase, n){
  var i = 1;
  while(i <= n){
    console.log(phrase);
    i++;
  }
}

// repeatPhrase("Hello", 5)


function toTheNthPower(number, power){
  var i = 2;
  var powered = number;
  while (i <= power){
    powered = powered * number
    i++;
  }
  return powered;
}

var result = toTheNthPower(4, 5);
// console.log(result);


function areaOfACircle(radius){
  return (3.14 * radius * radius);
}

var result = areaOfACircle(2);
// console.log(result);


function pythagoreanTheorem(a, b){
  var aSq = a * a;
  var bSq = b * b;
  var cSq = aSq + bSq;

  return Math.sqrt(cSq)
};

var result = pythagoreanTheorem(3, 4);
// console.log(result);


function isXEvenlyDivisibleByY(x, y){
  if (x % y === 0){
    return true;
  }
  else {
    false;
  }
}
var result = isXEvenlyDivisibleByY(99,3);
// console.log(result);


function countVowels(word){
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var letter = word.split("");
  var count = 0;
  for (var i = 0; i < letter.length; i++){
    if (vowels.indexOf(letter[i]) !== -1 ){
      count += 1;
    }
  }
  return count;
}
// console.log(countVowels("stealing"));


function findWdi(arr){
  for (var i = 0; i < arr.length; i++){
    if (arr[i] !== "wdi"){
      continue;
    }
    else if (arr[i] === "wdi"){
      return true;
    }
  }
  return false;
}
// console.log(findWdi([9,'Bart Simpson', true, 'wdi'])) // returns true
// console.log(findWdi(['a','b','c'])); // returns false


function findLongestWord(sentence){
  var words = sentence.split(" ");
  var longestWord = -1;

  for (var i = 0; i < words.length; i++){
      if (words[i].length > longestWord){
        longestWord = words[i];
      };
  };
  return longestWord;
};

// console.log(findLongestWord("asdfjkl"))


function printTriangle(length){
  var star = " ";
  for (var i = 0; i < length; i++){
    star += "*"
    console.log(star);
  }
}
// printTriangle(5);
