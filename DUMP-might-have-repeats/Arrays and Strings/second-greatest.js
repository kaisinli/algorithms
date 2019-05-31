const secondGreatest = (arr) => {
  
  var index0 = arr[0] > arr[1] ? arr[0] : arr[1];
  var index1 = index0 === arr[0] ? arr[1] : arr[0];
  var large = [index0, index1];
  
  for (var i = 2; i < arr.length; i++) {
    if (arr[i] > large[0]) {
      large.unshift(arr[i]);
    } else if (arr[i] > large[1]) {
      large[1] = arr[i]
    }
  }
  
  return large[1]
}