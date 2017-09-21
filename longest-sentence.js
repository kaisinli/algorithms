/* Task: Get the length of the longest sentence in a given paragraph. 
Sentences are marked by periods(.), commas(,) and exclamation points(!).
*/

function longestSen(str) {
    var longest = 0;
    let sentenceArr = str.split(/[.,!]/);

    sentenceArr.map(eachSen => {  
        var length = eachSen.split(' ')
        .filter(sen => sen.length > 0)
        .length;    
        longest = (length > longest) ? length : longest
    })

    return longest
}