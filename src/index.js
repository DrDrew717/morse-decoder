const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  '': ' ',
};

module.exports = function decode(expr) {
  const arr = [];
  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10));
  }
  arr.forEach((item, index) => {
    let str = '';
    for (let i = 0; i < 10; i += 2) {
      const num = item.slice(i, i + 2);
      if (num !== '00' && num === '10') {
        str += '.';
      } else if (num !== '00' && num === '11') {
        str += '-';
      }
    }
    arr[index] = MORSE_TABLE[str];
  });
  return arr.join('');
};
