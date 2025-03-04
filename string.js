//find the length of a string 
// Multi-line (Block) Comment:Shift + Alt + A

const str ="sheetal";
console.log(str.length)

// find the index of a target string in whole string given 


function findindxof(str,target ){
     console.log("original string", str);
    console.log("index", str.indexOf(target));
}
findindxof("sheetal kumari sheetal kumari sheetal kumari", "kumari");


// we can used lastIndexOf insted of indexOf then we find last one


function findlastindxof(str,target ){
    console.log("original string", str);
   console.log("index", str.lastIndexOf(target));
}
findlastindxof("sheetal kumari sheetal kumari sheetal kumari ", "kumari");

//<< getslice>>//
//Shortcut to Copy & Duplicate the Last Line Shift + Alt + ↓ (Down Arrow)
function getslice( sen, start ,end){
    console.log("original string" ,sen);
    console.log("after slice", sen.slice(start,end ));
}
getslice("chalakpur",0,5);

