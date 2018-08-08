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
                    return false
                    break;
                }
            }
            if (i === str.length - 1) {
                if (opensStack.length === 0) return true;
                else return false;
            }
        }
    })
}

// #####################################
// Solution that returns true/false

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


// #####################################
// A similar problem: returning the number of unmatched parentesis

function bracketMatch(text) {
    var stack = [text[0]];

    for (var i = 1; i < text.length; i++) {
        if (text[i] === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                stack.push(text[i])
            }
        }

        else if (text[i] === '(') {
            stack.push(text[i])
        }
    }
    return stack.length;
}

