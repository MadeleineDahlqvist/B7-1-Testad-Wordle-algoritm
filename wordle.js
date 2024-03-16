export default function wordle(str, str2) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str.charAt(i) === str2.charAt(j)) {
        console.log("correct");
      }
    }
  }
}
