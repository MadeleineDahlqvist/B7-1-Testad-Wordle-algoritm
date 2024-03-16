export default function wordle(str, str2) {
const answer = [];
const correctLetters = {};
  for (let i = 0; i < str.length; i++) {
    let result = "incorrect";
    for (let j = 0; j < str2.length; j++) {
      if (str.charAt(i) === str2.charAt(j) && i === j) {
        result = "correct";
        correctLetters[str.charAt(i)] = true;
      }
    }
    answer.push({letter: str.charAt(i), result});
  }
  for (let i = 0; i < str.length; i++) {
    if (str2.includes(str.charAt(i)) && correctLetters[str.charAt(i)] !== true) {
      answer[i].result = "misplaced";
    }
  }
  return answer;
}
