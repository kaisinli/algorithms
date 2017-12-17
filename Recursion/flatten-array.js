var flatten = function (arr){
  var answer = [];
  var i = 0;
  
  while(arr[i]){
    if(Array.isArray(arr[i])){
      answer = answer.concat(flatten(arr[i]));
    } else {
      answer.push(arr[i]);
    }
    i++;
    console.log(answer)
  }
  return answer;
}