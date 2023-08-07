/* 
1.if ticket price quantity less than 100, price is 100.
2.if ticket price quantity more than 100 and less than 200, price is 80.
3.if ticket price quantity more than 200, price is 60.

*/
function myTicket(number){
    const first100=100;
    const scond100=80;
    const moreThan200=60;
    if(number <= 100){
        const ticketPrice= number * first100;
        return ticketPrice;
    }
    else if(number <= 200){
        const first100price= 100 * first100;
        const restTicketQuantity= number - 100;
        const restTicketPrice=restTicketQuantity * scond100;
        const totalPrice= first100price + restTicketPrice;
        return totalPrice; 
    }
    else{
        const first100price= 100 * first100;
        const scond100price= 100 * scond100;
        const restTicketQuantity= number - 200;
        const restTicketPrice=restTicketQuantity * moreThan200;
        const totalPrice=first100price +  scond100price + restTicketPrice;
        return totalPrice

    }
}
const total=myTicket(350);
console.log(total);