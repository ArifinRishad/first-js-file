const friend=['hablu', 'tablu', 'khablu', 'bablu', 'mablu', 'billu', 'fillu'];

const moreFriends=['sablu', 'khablu', 'bola',' mola']
const allFriends=moreFriends.concat(friend);
console.log(allFriends);
const friendSlice=allFriends.slice(2, 6);
/* console.log(friendSlice); */
const partial=allFriends.splice(2, 5, 'bulbul', 'chulbul', 'halbul');
console.log(partial);
