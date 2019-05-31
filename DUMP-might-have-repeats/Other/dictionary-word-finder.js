/*prompt: 

Given an alphabetical array of dictionary entries and a word to 
search for, find that word's definition (if it exists). This array 
of dictionary entries will be formatted like so:

[
  'definition - A statement of the exact meaning of a word, especially in a dictionary',
  'inane - Lacking sense or meaning; silly',
  'word - A single distinct meaningful element of speech or writing, used with others (or sometimes alone) to form a sentence and typically shown with a space on either side when written or printed'
]
*/



// Below solution is the optimized precomputed hash map solution, `O(n)` time for the first run, `O(1)` for every subsequent run (AKA `O(n)` preprocessing time), and `O(n)` space.
// First run to to create the hash map. Actually if you consider the size of an entry to be a relevant variable, then the space complexity changes by a multiplier of `p`, the average size of an entry in the dictionary.


const cache = new Map();
//cache can hold multiple dictionaries 

function findOrCreateHashMap(dict) {
    // use the dictionary array object itself as a KEY
    if (cache.has(dict)) return cache.get(dict);

    const hashmap = {};
    dict.forEach(entry => {
        const [word, definition] = entry.split(' - ');
        hashmap[word] = definition;
    });
    cache.set(dict, hashmap);
    return hashmap;
}

function definitionOf(word, dict) {
    const hashmap = findOrCreateHashMap(dict);
    return hashmap[word];
}

/* Map has following methods :

has
set
get 

*/