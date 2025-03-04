// used to reduce an array to a single value.
// This can be a sum, product, average, object, or anything.
const numbers = [10, 20, 30, 40 ,50];
function findsum(numbers){
    let sum =0;
    for (let index = 0; index < numbers.length; index++) {
        sum = sum+ numbers[index]; 
    }
    return sum;
}
console.log(findsum(numbers));

/// using reduced ()
 const  output =numbers.reduce(function(acc, curr){
    acc= acc+ curr;
    return acc;
 }, 0); // here 0 is intilization of acc
 console.log(output);
 
//find max

 const output2 = numbers.reduce(function(acc, curr){
if (curr > acc){
    acc = curr;
}
return acc;
 },0 );
 console.log(output2);
