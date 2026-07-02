//Example: Given the array [2, 7, 11, 15] and a target of 9, the solution would return indices 0 and 1.


let array = [2, 7, 11, 15, 4]
let target = 9

// let leftArray = array.filter((item) => item <= target)

// console.log(leftArray)
for (let i = 0; i <= array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] == target) {
            console.log(i, j)
        }

    }
}