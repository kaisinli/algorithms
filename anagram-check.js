const anagramCheck = (firstWords, secondWords) => {
  let sorted1 =[];
  let sorted2= [];
  
  firstWords.forEach(word => {
      word = word.split('').sort().join('');
      sorted1.push(word)
  });
  secondWords.forEach(word => {
      word = word.split('').sort().join('');
    sorted2.push(word)
  });
  
  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] === sorted2[i]) console.log(1)
    else console.log(0)
  }
}
