const sumAll = function(a,b) {
var sum = 0
if(a<b){
  for(a;a=b;a++){
    sum = sum + a;
  }
  return sum;
}
else if(a>b){
      for(a;a=b;a--){
        sum = sum + a;
      }
    return sum;
  }
}

module.exports = sumAll
