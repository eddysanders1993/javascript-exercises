const fibonacci = function(f) {
  let arr = [0,1];
  let num = parseInt(f);
  if(f < 0) {
    return 'OOPS';
  }

  for(var i =0;i<f;i++){
    arr.push(arr[arr.length-2]+arr[arr.length-1]);
  }
  return arr[f].valueOf();
}

module.exports = fibonacci
