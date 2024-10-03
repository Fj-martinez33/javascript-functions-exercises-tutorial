// Your code goes here
const rapid = (name) => {
    let consonants = []
    for (let i of name.toLowerCase()){
        if(['a', 'e', 'i', 'o', 'u'].includes(i) == false){
            consonants.push(i.toUpperCase());
        }
    }
    return consonants;
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
