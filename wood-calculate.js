/* 
perChair --> 10cft
perBed --> 50cft
pertabel --> 20cft
 */
function woodCalculator(chair, tabel, bed){
    const perChair=10;
    const perBed=50;
    const pertabel=20;
    const chairTotalWood=chair * perChair;
    console.log('Chair total wood= ', chairTotalWood, 'cft');
    const bedTotalWood=bed * perBed;
    console.log('Bed total wood= ', bedTotalWood, 'cft');
    const tabelTotalWood= tabel * pertabel;
    console.log('Tabel total wood= ', tabelTotalWood , 'cft')
    const totalWood= chairTotalWood + tabelTotalWood + bedTotalWood;
    return totalWood;

}
const totalWood=woodCalculator(2, 3, 2);
console.log('Total Wood Needed= ', totalWood, 'cft');