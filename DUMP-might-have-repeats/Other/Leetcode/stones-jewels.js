var numJewelsInStones = function(J, S) {
    var jewels = 0;
    for (let i = 0; i < S.length; i++) {
        if(J.indexOf(S[i])!== -1) {
          jewels++;
        }
    }
    return jewels
};