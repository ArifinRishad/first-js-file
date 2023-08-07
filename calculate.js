function mileTokm(km){
    const miles=km*0.621371;
    return miles;
}
const dadaskm=500;
const dadasmiles= mileTokm(dadaskm);
console.log(dadasmiles);