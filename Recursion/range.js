const range = (lb, hb) => {
    if(lb === hb - 1 || lb === hb){
      return []
    }
    
    let finalRange = [lb + 1];
    finalRange = finalRange.concat(range(lb+1, hb));
    
    return finalRange;
}