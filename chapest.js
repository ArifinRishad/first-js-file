const phones=[
    {
        name:'samsung', camara: '50mpx', stroge:100, price: 33500, colour: 'black'
    },

    {
        name:'OnePlus', camara: '50mpx', stroge:128, price: 50000, colour: "Silver"
    },

    {
        name:'Oppo', camara: '120mpx', stroge:64, price: 25000, colour: 'Blue'
    },

    {
        name:'Nokia', camara: '50mpx', stroge:64, price: 40000, colour: 'black'
    },

    {
        name:'Xaomi', camara: '50mpx', stroge:128, price: 28000, colour: 'Gray'
    },

    {
        name:'Iphone', camara: '50mpx', stroge:50, price: 90000, colour: 'white'
    }
]
function chepestPhone(phones){
    let chipest = phones[0];
    for(let i=0; i < phones.length; i++){
        const phone= phones[i];
        if(phone.price > chipest.price && phone.stroge > chipest.stroge ){
            chipest=phone;    
        }
    }
    return chipest;

}
const mySelection=chepestPhone(phones);
console.log('The chipest phone for me: ', mySelection);