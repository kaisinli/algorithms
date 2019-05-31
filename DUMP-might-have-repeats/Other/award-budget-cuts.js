function findGrantsCap(grantsArray, newBudget) {
    grantsArray.sort((a, b) => b - a);
    let len = grantsArray.length;

    //pad the array with a zero at the end to cover the case where 0 <= cap <= grantsArray[i];
    grantsArray.push(0);

    let surplus = grantsArray.reduce((total, num) => total + num) - newBudget;
    let cap = 0;

    if (surplus <= 0) {
        return grantsArray[0];
    }

    for (let i = 0; i <= len - 1; i++) {
        surplus -= (i + 1) * (grantsArray[i] - grantsArray[i + 1]);

        if (surplus <= 0) {
            console.log(surplus)
            return grantsArray[i + 1] + (-surplus / Math.floor(i + 1));
        }
    }

}