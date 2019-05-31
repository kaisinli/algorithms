function getIndicesOfItemWeights(arr, limit) {
  var hashTable = {};

  for (var i = 0; i < arr.length; i++) {
    var d = limit - arr[i];
    if (hashTable[d] !== undefined) {
      return [i, hashTable[d]];
    } else {
      hashTable[arr[i]] = i
    }
  }

  return [];
}