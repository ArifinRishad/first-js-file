// const names=['rabbi', 'khan', 'nodi', 'bonna', 'tushir','alamin', 'node', 'bonna', 'alal', 'dulal', 'raihan', 'simul'];
// function removeDuplice(names){
//     const unic=[];
//     for(let i=0; i<names.length; i++){
//         const name=names[i];
//         if(unic.includes(name)===false){
//             unic.push(name);
//         }
        
//     }
//     return unic;

// }
// const friends=removeDuplice(names);
// console.log(friends);
//  function removeDuplicetvalu(names){
//     const unic=[];
//     for(let i=0; i<names.length; i++){
//         const name=names[i];
//         if(unic.includes(name) === false )
//         {
//             unic.push(name);

//         }
//     }
//    return unic;

//  }
//  const friends=['rabbi', 'khan', 'nodi', 'bonna', 'tushir','alamin', 'node', 'bonna', 'alal', 'dulal', 'raihan', 'simul','kabil', 'jabol'];
//  const finalList=removeDuplicetvalu(friends);
//  console.log(finalList);
function duplicateValuRemove(names){
    const final=[];
    for(let i=0; i<names.length; i++){
        const name=names[i];
        if(final.includes(name) === false){
            final.push(name);
        }
    }
    return final;

}
const friends=['rabbi', 'khan', 'nodi', 'bonna', 'tushir','alamin', 'node', 'bonna', 'alal', 'dulal', 'raihan', 'simul','kabil', 'jabol','jabol', 'kabol', 'kabil', 'kabil']
const finalList=duplicateValuRemove(friends);
console.log(finalList);