/**
 * Using the counts of repeated characers. If the compressed string is not shorter than the 
 * original string, return the original string
 * 
 * Example:
 * aabccccaaa -> a2b1c5a3
 *
 */

const strComp = (str) => {
    let arr = [];
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== arr[arr.length - 1]) {
            arr.push(counter)
            arr.push(str[i]);
            counter = 1;
            if (i === str.length - 1) {
                arr.push(counter)
            }

        } else {
            counter++;
            if (i === str.length - 1) {
                arr.push(counter);
            }
        }
    }
    arr.shift()
    return arr.join('')
} 