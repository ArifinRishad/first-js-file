function max(first, secound, thired){
    if (first>secound && first>thired) {
        console.log("First number is the large number")
        
    }
    else if(secound>first && secound>thired){
        console.log("Scound number is ther large number")
    }
    else{
        console.log("third number is the large number")
    }
    return max;

}
let first=50;
let secound=80;
let thired=70;
let maxes=max(first, secound, thired);
console.log(maxes);
console.log('Max number is',Math.max(first, secound, thired));
console.log('min number is', Math.min(first, secound, thired));

