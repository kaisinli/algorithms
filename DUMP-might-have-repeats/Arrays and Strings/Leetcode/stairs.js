const stairs = n => {
  let i = 1;
  let final = '';

  while (i <= n) {
    if (i === 1) {
      for (let j = 1; j < n; j++) {
        final += ' ';
      }
      final += '#';
    } else {
      final = final.slice(1) + '#';
    }
    console.log(final);
    i++;
  }
};