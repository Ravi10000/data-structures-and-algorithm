var mergeAlternately = function (word1, word2) {
    const length = word1.length > word2.length ? word1.length : word2.length;
    let str = "";
    for (let i = 0; i < length; i++) {
        if (word1[i] !== undefined)
            str += word1[i];
        if (word2[i] !== undefined)
            str += word2[i];
    }
    return str;
};

    mergeAlternately("abcdefgh", "pqrs");