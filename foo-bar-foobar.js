/* 
1. Show output from 1 to 50.
2. if number is divisible by 3 than instand of number , show foo.
3. if number is divisible by 5 than instand of number , show bar.
4. if number is divisible by both 3 and 5 than instand of number , show foobar.
*/

for(let i=1; i<=500; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('foobar')
    }
    else if(i % 3 === 0 ){
        console.log('foo');
    }
    else if(i % 5 === 0){
        console.log('bar');
    }
    else{

        console.log(i);
    }
}