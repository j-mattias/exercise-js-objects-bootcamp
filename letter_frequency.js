console.log(letterFrequency("kalle"));
console.log(letterFrequency("aaaa"));
console.log(letterFrequency("ni talar bra latin"));

function letterFrequency(str) {
  let obj = {};
  for (const letter of str.toLowerCase()) {
    if (!obj[letter]) {
      obj[letter] = 0;
    }
    obj[letter]++;
  }
  return obj;
}
