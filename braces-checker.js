const bracesChecker = (arr) => {

    const opens = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    const closes = {
        '}': '{',
        ']': '[',
        ')': '('
    };

    arr.forEach(str => {
        //a place hold all the open braces in a stack
        let opensStack = [];
        let i;
        for (i = 0; i < str.length; i++) {
            if (opens.hasOwnProperty(str[i])) {
                opensStack.push(str[i]);
            } else if (closes.hasOwnProperty(str[i])) {
                const mostRecentOpen = opensStack.pop();
                const correspondingClose = opens[mostRecentOpen];
                if (str[i] !== correspondingClose) {
                    console.log(0);
                    break;
                }
            }
            if (i === str.length - 1) {
                if (opensStack.length === 0) console.log(1);
                else console.log(0);
            }
        }
    })
}

var arr = [')(){}', '[]({})', '([])', '{()[]}', '([)]']

bracesChecker(arr)



// To check an individual string and returns true/false

const opens = {
    '{': '}',
    '[': ']',
    '(': ')'
};

const closes = {
    '}': '{',
    ']': '[',
    ')': '('
};

const isValid = (str) => {
    let opensStack = [];
    let i;
    for (i = 0; i < str.length; i++) {
        if (opens.hasOwnProperty(str[i])) {
            opensStack.push(str[i]);
        } else if (closes.hasOwnProperty(str[i])) {
            const mostRecentOpen = opensStack.pop();
            const correspondingClose = opens[mostRecentOpen];
            if (str[i] !== correspondingClose) {
                return false
            }
        }
        if (i === str.length - 1) {
            if (opensStack.length === 0) return true;
            else return false;
        }
    }
};