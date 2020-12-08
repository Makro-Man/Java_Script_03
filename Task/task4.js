'use strict'

function filterRange(array, a, b){
    let newArray = [];

    if ((a < 0) || (a > array.length) || (b < 0) || (b > array.length)) {
        console.log("Number entered outside array indices!");
    } else {
        for (let i = a; i < b; i++) {
            if (!isNaN(array[i])) {
                newArray.push(array[i]);
            }
        }
    }

    return newArray;
}

let chusla = [1, "Apple", 2, 3, 4, "Orange", 5, 6, "Bannana" ];
console.log(filterRange(chusla, 2, 5));

