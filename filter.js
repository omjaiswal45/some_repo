const arr = [3,4,5,8,9,6];
// filter odd values 
function is_odd(x){
    return x%2;
}
function is_even(x){
    if(x%2==0){
        return x;
    }
}
const output = arr.filter(is_odd);
const output2 = arr.filter(is_even);
console.log(output);
console.log(output2);