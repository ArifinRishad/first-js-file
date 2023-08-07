// function findOddsum(numbers){
//     let sum=0;
//     for(let i=0; i<numbers.length; i++){
//         const index=i;   
//         const elment=numbers[index]
//         sum=sum+elment;
//         console.log(index, elment, sum);
//     }
//     return sum;

// }
// const myNumber=[12,25, 65, 85, 95, 90,87,53,63,64,67];
// findOddsum(myNumber);
function arraysun(numbers){
     sum=0;
    const oddnumber=[]
    for(let i=0; i < numbers.length; i++ ){
        const index=i;
        const elment=numbers[index];
        
        if(elment % 2== 1){

            console.log(index, elment, sum);
            sum=sum+elment;
            oddnumber.push(elment);

        }
        

    }
    return oddnumber;

    


}
const myNumbers=[25,65,85,75,45,12,1,5,96,75,35,1,985,1475,56];
const oddnumber=arraysun(myNumbers);
console.log(oddnumber);
/* const oddNumberSum=arraysun(myNumbers);
console.log(oddNumberSum); */