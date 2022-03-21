// -------------------- --------------------
//1
//Find longest word
function findLongest(str) {
    let words = str.split(" ");
    let arr = [];
    words.map(word=> word.length>arr.length? arr = word: arr);
    console.log(arr)
}

// findLongest("The biiig problem of my longestword ");

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

// titleCase('Tohle byl docela oříšek!');
// I will b I will be here fore me and my frind and I will be doing my funkcing my so my funck

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

// titleCase2('Druhý zpusob, ten by také šel!');

//Third try (with clasic for loop):
function titleCase3(str) {
    let words = str.split(" ");
    for (i=0;i<words.length; i++) {
        words[i] = words[i][0].toUpperCase()+words[i].slice(1);
    }
    console.log(words.join(" "));
}
function titleCase4(str) {
    let words = str.split(" ");
    console.log(words.join)
    arr.forEach()// cley title case 4 se bude mazat takze nebude potrebovat ani fibonachiho funkce ani nic jineho jesl
}

// titleCase3('Třetí možnost s použitím for loopu a join()');

//Fourth way:
// function titleCase4(str) {
//     // console.log((str.split(" ").map(x=> x[0].toUpperCase()+x.slice(1)).join(" ")));
// }
//lze vylepšit: str.toLowerCase() v prvním kroku
// titleCase4('lol "One line of code" varianta také funguje')


// -------------------- --------------------
//3
//Largest numbers in arrays
function largestOfFour(arr) {
    let result =[];
    arr.forEach(child=> result.push(child.reduce((x,y)=> y>x? x = y: x)));
    console.log(result);
}

// largestOfFour([[4,5,1,3], [13,27,18,26], [32,35,37,39], [1000,1001,857,1]]);


// -------------------- --------------------
//4
// Fibonachiho posloupnost
function fibonachi(x,y) {
    let vars = [x,y];
    let result = [x,y];
    for (i=0;i<100;i++) {
        let n = vars.reduce((acc,cur)=>acc+=cur);
        result.push(n);
        vars.push(n);
        vars.shift();
    }
    console.log(result)
}

// začínající 0, 1, 1, 2, 3, 5, 8, 13, 21
// fibonachi(0,1);


// -------------------- --------------------
//5
// Confirm ending
function confirmEnding(str, target) {
    console.log(target === str.split("").reverse().slice(0,target.length).reverse().join("") ? true : false);
}
// lepsi zpusob: str.substr(-target.length)
// confirmEnding("Bastian", "tian"); //must return true


// -------------------- --------------------
//6
// Repeating string x times 

function repeatNumTimes(str, num) {
    let result =[];
    for (i=0;i<num; i++) {
        result.push(str)
    }
    console.log(result.join(""));
}
function repeatNumTimes2(str, num) {
    let result ="";
    for (i=0;i<num; i++) {
        result+=str
    }
    console.log(result);
}

function repeatNumTimes3(str, num){
    if (num<0) return "";
    if (num===1) return str;
    return str+= repeatNumTimes3(str, num-1);  //base case
}

// repeatNumTimes2("abc", 3); 


// -------------------- --------------------
//7
// Truncate a string

function truncateString(str, num) {
    let result = "";
    if (str.length>num) {
        result=str.slice(0,num);
        result = result.slice(0,-3);
        console.log(result+"...")
   } else if (str.length <= num) console.log(str);
}

// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length+2);

// -------------------- --------------------
//8
// Array in groups

function arrayInGroup(arr, size) {
    let result = [];
    while(arr.length>0) {
        result.push(arr.splice(0,size));
        // arr = arr.slice(size);
        // if (arr.length<=size) result.push(arr); 
    }
    // console.log(result);
    return result
}

// console.log(arrayInGroup(["a", "b", "c", "d", "e", "f", "g", "h", "ch", "i"], 3)) //[a,b,c,] [d,e,f] [g,h,ch] [i]
// arrayInGroup(["a","b","c","d"], 3)


// -------------------- --------------------
//9 no comment
//  // 
const log = console.log;
// 
// log("aha")

// -------------------- --------------------
//10 Slasher

function slasher(arr, howMany) {
    log(arr.slice(howMany));
}

// slasher([1,2,3], 2)


// -------------------- --------------------
//11 Mutation

// let getOut = [1, 2, 3, 4];
// getOut.splice(1,1);
// here will be my function and  
// and here will be my sedond function 
// and here will be my third function 


// log(getOut)

function mutation(arr) {
    let first = arr[0].split("");
    let second = arr[1].split("");
    for (i=0;i<first.length;i++) {
        if(second.some((x)=>x===first[i])) {
            second.splice(second.indexOf(first[i]),1);
        }
    }
    log(second)
    log(second[0]==undefined ? true : false);
}

// mutation(["hello", "hey"]);  


function mutation2(arr) {
    let first = arr[0].toLowerCase();
    let second = arr[1].toLowerCase();          //string ma také indexOf !
    for (i=0; i<second.length; i++) {
        if (first.indexOf(second[i]) === -1) return false;
    }
    return true;
}

//includes()

// log(mutation2(["hello", "hello"])); 


// -------------------- --------------------
//12 Bouncer

// Remove all falsy values from an array. .. false, null, 0, undefined, Nan, ""

function bouncerBasic(arr) {
    let result = [];
    arr.map(a=> Boolean(a)==true ? result.push(a): a)
    console.log(result);
}
// bouncerBasic([7, "ate", "", false, 9]);

function bouncer(arr) {
    log(arr.filter(x=>x));
}

// bouncer([7, "ate", "", false, 9]);

// -------------------- --------------------
//13 Destroyer

// log([1,2,3,4,5].filter(x=>x<4)) //filter  // [1,2,3]

function destroyer(arr) {
    const args = Array.from(arguments);  //arguments method !!
    args.splice(0,1);
    //filter method:
    let result = arr.filter(x=>args.indexOf(x)==-1);    //lze pouzit i: (!args.includes(x))
    log(result)
}

// destroyer([1,2,3,1,2,3], 2,3)  //[1,1]


function myOwn(arr, numbers) {
    let pozustalaCisla = [];
    let x = arr.forEach(a=> (numbers.indexOf(a)===-1) ? pozustalaCisla.push(a) : a);
    console.log(pozustalaCisla);
}

// myOwn([1,2,3,4,5,5,5,10,11,12,15,10,5], [5,10,15])




// -------------------- --------------------
//14 Get Index to Ins

function getIndexToIns(arr,num) {
    arr.push(num);
    arr.sort((a,b)=>a-b);
    log(arr);
    log(arr.indexOf(num));
}

// getIndexToIns([40,60], 50) //should return index1 (50 >40(index0) + 50(index1<60)

//..
// ([10,20,30,40,50], 35) // 3
// getIndexToIns([20,10,5,30,40,60,0,50], 35)



// -------------------- --------------------
//15 Sum all

function sumAll(arr) {
    let myArr =[];
    let start = Math.min(...arr);
    let last = Math.max(...arr);
    for (i=start; i<=last; i++) {
        myArr.push(i);
    }
    log(myArr);
    log(myArr.reduce((a,b)=>a+=b));
}

// sumAll([1, 4]);


// -------------------- --------------------
//16 Diff Array

// for(), indexOf() ->>

function diffArray(arr1, arr2) {
    let newArr = [];
    for (x=0; x<arr1.length; x++) {
        arr2.indexOf(arr1[x]) === -1 ? newArr.push(arr1[x]): false;
    }
    for (y=0; y<arr2.length; y++) {
        arr1.indexOf(arr2[y]) == -1 ? newArr.push(arr2[y]) : false
    }
    log(newArr);
}

// diffArray([1,2,3,4,5], [4,5,8,9]);
// -------------------- --------------------
// filter(), concat() ->>

function diffArray2(arr1, arr2) {
    let result = [];
    arr1.filter(x=> arr2.indexOf(x)==-1).map(x=>result.push(x));
    arr2.filter(x=> arr1.indexOf(x)==-1).map(x=>result.push(x));
    log(result);
}
// diffArray2([1,2,3,4,5], [4,5,8,9]);

//  CONCAT() !!
function diffArray3(arr1, arr2) {
    log(arr1.filter(x=> arr2.indexOf(x)==-1).concat(arr2.filter(x=> arr1.indexOf(x)==-1)));
}
// diffArray3([1,2,3,4,5], [4,5,8,9]);

function diffArray4(arr1, arr2) {
    let combo = arr1.concat(arr2);
    log(combo.filter(function(x) {
       if( arr1.indexOf(x)==-1 || arr2.indexOf(x)==-1) return x;
    }))
}
// diffArray4([1,2,3,4,5], [4,5,8,9]);

// -------------------- --------------------
//17 Roman numeral

function convertToRoman(num) {
    let romanToNum = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    }
    result = "";

    for (let roman in romanToNum) {
        while (num >= romanToNum[roman]) {
            result += roman;
            num -= romanToNum[roman];
            log(romanToNum[roman]);
        }
    }
    log(result);
}
// random discovery = ctrl + / or ()
convertToRoman(42);

// let testObject = {
//     a: 1,
//     b: 10,
//     c: 100,
//     d: 1000,
// }

// ..
// -------------------- --------------------
// -------------------- --------------------
// -------------------- --------------------
let myTestArr = ["a", "b", "c"];
// log(myTestArr.splice(1,1));     //["b"]
// log(myTestArr);                 //["a", "c"]

// -------------------- --------------------
//Bonus
// [65,...90]
//  [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
//  charCodeAt()
//  fromCharCode()

// range: 65-90

function root13(str) {
    let arr = str.split("");
    let result = [];
    arr.map(x=> {
        let next = x.charCodeAt();
        log(next);
        (next >=65 & next < 78) ? result.push(next+=13) : false;
        next >= 78 ? result.push(next-=13) : false;
        // result.push(next);
    })
    log(...result)
    log(String.fromCharCode(...result));
}

// root13("SERR PBQR PNZC");  //FREE CODE CAMP   vyresit: e,b,c
// root13("A");

// function fibones(x,y,z) {
//     let result = [x,y];
//     let vars = [x,y];
//     for (i=0; i<z; i++) {
//         let next = (vars.reduce((a,b)=> a+=b));
//         result.push(next);
//         vars.push(next);
//         vars.shift();
//     }
//     console.log(result);
// }

// fibones(0,1,10);


// LeedCode

// -------------------- --------------------
//001 TwoSum

function twoSum(nums, target) {
    let result;
    nums.map(x=> {
        for (i=0; i<nums.length; i++) {
            if(x+nums[i]==target & x !=nums[i]) {
                result = [nums.indexOf(x), nums.indexOf(nums[i])];
            }
        }
    })
    log(result.sort());
}

twoSum([5,9,3,4,7], 10)  // output should be: [2,4]
