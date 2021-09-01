module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;

  let stringsOfBrackets = bracketsConfig.map(pairOfBrackets => pairOfBrackets.join(''));

  for (let i = 0; i < stringsOfBrackets.length; i++) {
    if (str.split(stringsOfBrackets[i]).join('').length < str.length) {
      str = str.split(stringsOfBrackets[i]).join('');
      i = -1;
    }
  } 

  return str ? false : true;
}
