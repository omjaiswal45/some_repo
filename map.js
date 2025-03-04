const arr =[3,4,5,87,7];
function double(x){
    return x*2;
}
function binary(x){
    return x.toString(2);
}
const output =arr.map(double);
const output2 =arr.map(binary);
const output3 =arr.map(function double(x){
    return x*2;
});
const output4 =arr.map(function binary(x){
    return x.toString(2);
});
const output5 =arr.map((x) => x.toString(2));
console.log(output);
console.log(output2);
console.log(output3);
console.log(output4);
console.log(output5);
 
/*Transform an array into another array	  >>>>>                         map()
Just iterating (no return value needed)	  >>>>                         forEach()
Filtering an array (get some elements)  >>>>>>>>>>                     filter()
Converting an array into a single value (object, number, array)	>>>>>  reduce()
✔ reduce()..It’s perfect for grouping, counting, or aggregating data. */

const users = [
    { firstName: "Amit", lastName: "Sharma", age: 25 },
    { firstName: "Priya", lastName: "Singh", age: 30 },
    { firstName: "Rahul", lastName: "Verma", age: 25 },
    { firstName: "Sheetal", lastName: "Gupta", age: 22 },
    { firstName: "Vikram", lastName: "Kumar", age: 30 },
    { firstName: "Neha", lastName: "Joshi", age: 22 }
  ];
  // Create Full Names Array// Output: ["Amit Sharma", "Priya Singh", "Rahul Verma", "Sheetal Gupta", "Vikram Kumar", "Neha Joshi"]
  const output6 = users.map((x) => x.firstName + " " +x.lastName);
  console.log(output6);

  //Count Users by Age
  const output7 = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age]= ++acc[curr.age];
    }
    else{
        acc[curr.age] =1;
    }
    return acc;
  }, {});
  console.log(output7);
  ///.......... .....Using filter + map along with .........................

  const output8 = users.filter((x) => x.age< 30). map((x) => x.firstName + " " + x.age)
console.log (output8);

/// ...................Using reduce() Instead...............................

  const output10 = users.reduce(function(acc, curr) {
    if (curr.age < 30) {
      acc.push(curr.firstName + " " + curr.age);// acc.push(...) adds elements to the array.
    }
    return acc;
  }, []);
  
  console.log(output10);
  


   
