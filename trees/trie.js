/**
 * A trie is a tree, also called a prefix tree. A trie stores data in steps where each step is a node in the trie. 
 * Tries are often used to store words for quick lookup, such as a word auto-complete feature.
 * 
 * Think of how each node is a character adding to the string you are trying to look up. All string "starts" with root,
 * which is null
 * 
 * First let's create a node:
 */

function TrieNode(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
}

// Create a trie
function Trie() {
    this.root = new TrieNode(null);
}

// insert a word(string) into trie
// time complexity: O(k), k = word length
Trie.prototype.insert = function (word) {
    let node = this.root;

    for (var i = 0; i < word.length; i++) {
        // check to see if the first letter of the word is a child of node (root for the first round)
        if (!node.children[word[i]]) {
            // if it's not, we create it. key is word[i]
            node.children[word[i]] = new TrieNode(word[i]);
            // and set that child's parent
            node.children[word[i]].parent = node;
        }

        // now the child becomes a parent, and the for loops comtinues on to the second letter
        node = node.children[word[i]];

        // if we reach the end of the word
        if (i == word.length - 1) {
            node.end = true;
        }
    }
};

// let's find a word in trie
// O(k), k = word length
Trie.prototype.contains = function (word) {
    var node = this.root;

    for (var i = 0; i < word.length; i++) {
        if (node.children[word[i]]) {
            node = node.children[word[i]];
        } else {
            return false;
        }
    }

    // if the word exists in trie, node.end would be true
    return node.end;
};

// get words
// O(k), k = word length
TrieNode.prototype.getWord = function () {
    var output = [];
    var node = this;

    while (node !== null) {
        output.unshift(node.key);
        node = node.parent;
    }

    return output.join('');
};

function findAllWords(node) {
    // a place all the words
    let arr = [];
    // base case, if node is at a word, push to output
    if (node.end) {
        arr.unshift(node.getWord());
    }

    // iterate through each children, call recursive findAllWords
    for (let child in node.children) {
        findAllWords(node.children[child]);
    }
}

