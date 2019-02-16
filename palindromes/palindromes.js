const palindromes = function(word) {

  let check = word.replace(/[^a-z]/gi,'');
  let checkLowerCase=check.toLowerCase();
  let wordarr=checkLowerCase.split('');
  let wordReverseArr=wordarr.reverse();
  let wordReverse=wordReverseArr.join('');

  if(wordReverse==checkLowerCase){
    return true;
  }
  else {
    return false;
  }
}

module.exports = palindromes
