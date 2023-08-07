function isleapearYear(year){
    const leaper=year%4;
    if(leaper===0){
        return true
    }
    else{
        return false
    }
}
var thisyear=isleapearYear(2026)
console.log(thisyear);