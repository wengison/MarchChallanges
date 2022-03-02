// -------------------- --------------------
//1
//Find longest word
function findLongest(str) {
    let words = str.split(" ");
    let arr = [];
    words.map(word=> word.length>arr.length? arr = word: arr);
    console.log(arr)
}

findLongest("The biiig problem of my longestword ");

// -------------------- --------------------
//2
//Title case 
function titleCase(str) {
    let words = str.split(" ");
    let titleWords =[];
    words.forEach(word=>{
        let firstUpper = word.slice(0,1).toUpperCase();
        let x = Array.from(word);
        x.splice(0,1,firstUpper);
        titleWords.push(String(x).replace(/,/g, ""));
    });
    console.log(String(titleWords).replace(/,/g, " "))
}

titleCase('Tohle byl docela velký oříšek!');

//Second try:
function titleCase2(str) {
    let words = str.split(" ");
    let i = 0;
    words.forEach(word=> {
        word = word[0].toUpperCase()+word.slice(1);
        words.splice(i,1,word);
        i+=1;
    })
    console.log(String(words).replace(/,/g, " "))
}

titleCase2('Druhý zpusob, ten by také šel!');

//Third try (with clasic for loop):
function titleCase3(str) {
    let words = str.split(" ");
    for (i=0;i<words.length; i++) {
        words[i] = words[i][0].toUpperCase()+words[i].slice(1);
    }
    console.log(words.join(" "));
}
titleCase3('Třetí možnost s použitím for loopu a join()');

//Fourth way:
function titleCase4(str) {
    console.log((str.split(" ").map(x=> x[0].toUpperCase()+x.slice(1)).join(" "))) 
}
//lze vylepšit: str.toLowerCase() v prvním kroku
titleCase4('lol "One line of code varianta" také funguje!!')


// -------------------- --------------------
//3
//Largest numbers in arrays

function largestOfFour(arr) {
    let result =[];
    arr.forEach(child=> result.push(child.reduce((x,y)=> y>x? x = y: x)));
    console.log(result);
}

largestOfFour([[4,5,1,3], [13,27,18,26], [32,35,37,39], [1000,1001,857,1]]);

// -------------------- --------------------
//4
// ..


