function process(a, k) {
    let pairs = []

    for (let i = 0; i < a.length; i++) {
        let elem1 = a[i];
        for (let j = 0; j < a.length; j++) {
            let elem2 = a[j]
            if (elem1 + elem2 === 100 && pairs.indexOf([elem1, elem2]) == -1 && pairs.indexOf([elem2, elem1]) == -1) {
                pairs.push([elem1, elem2])
            }
        }
    }

    return pairs.length
} 