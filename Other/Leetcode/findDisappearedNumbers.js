const findDisappearedNumbers = nums => {
    let sorted = nums.sort((a, b) => a - b);
    let i = 0,
        j = 1,
        disappeared = [];

    while (j <= sorted.length) {
        if (sorted[i] === j && sorted[i] !== sorted[i - 1]) {
            i++;
            j++;
        } else if (sorted[i] === sorted[i - 1]) {
            i++;
        } else {
            disappeared.push(j);
            i++;
            j++
        }
    }

    return disappeared;
}

