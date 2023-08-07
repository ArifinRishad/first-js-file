// function factrialOfnumber(numbers){
//     let result=1;
//     for(let i=1; i<numbers; i++){
//         const index=i;
//         result=result*i;

//         console.log(result,i);
//     }
//     return result;
// }
// const result=factrialOfnumber(9);
 function recersFactroilOfnumber(numbers){
    let result=1;
    for(i=numbers; i>=1; i--){
        result=result*i;
        console.log(result);
    }
    return result;
 }
 const factnumbers=10;
 const result=recersFactroilOfnumber(factnumbers);
 console.log('factroal of number:', factnumbers, result);