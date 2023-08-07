function maxNumber(numbers){
    let largest=numbers[0];
    for(let i=0; i<numbers.length; i++){
        const index=i;
        const element=numbers[index];
        if(element>largest){
            largest=element;
        }

    }
   
    
return largest;
}
const higest=[25,95,75,200,458,241,236,7,596874,4587216589];
const tolest=maxNumber(higest);
console.log(tolest);