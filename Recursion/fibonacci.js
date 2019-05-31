// F(n) = F(n-1) + F(n-2)

// the following accepts a num and returns its position in the sequence
function fibonacci(num){
  var a = 1, b = 0, temp;
 
//   current is a, the next current is a + whatever comes before a, let's call it b.
//   new b is the old a 
  
  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

// recursively, print the sequence, starts at 0
const fibonacci = (n) => {
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        // get to the base case so it can start returning something
        let seq = fibonacci(n - 1);

        // then, starting at n === 2 onwards, it returns a seq, which would be used to calculate the next number in the seq
        seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
        
        return seq;
    }
};



// the following returns the number given the position in the sequence
// function fib(n){
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return (fib(n-1)+fib(n-2))
// }

const memoFib = function() {
	let memo = {};
	return function fib(n) {
		let value;

		if (memo[n]) value = memo[n];
		else {
			if (n < 2) value = n;
			else value = fib(n - 1) + fib(n - 2);
			memo[n] = value;
		}
		return value;
	};
}()