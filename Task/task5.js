'use strict'

function camelize(str){
    let words = [];

    words = str.split("-");

    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    let newStr = words.join("");
    console.log(newStr);
}

camelize('my-short-string');