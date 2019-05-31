function containsDuplicates(a) {
    var hash = {};
    for (var i = 0; i < a.length; i++) {
        if (hash[a[i]] === undefined) {
            hash[a[i]] = 1;
            if (i === a.length - 1) {
                return false;
            }
        } else {
            return true;
        }
    }
}