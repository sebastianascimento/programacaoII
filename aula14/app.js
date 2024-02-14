console.log("Hello , World");

var a = 'var A';
var b = 'var B';
var c = 'var C';

console.log(a);
console.log(b);
console.log(c);


const func = () => {
    console.log("func js called ");
}

function funcb () {
    console.log("funcb js called");
}

func();
funcb();

let arr = [22 , 34 ,23 , 45 , 543, 22 , 1 ];

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
    
}


arr.forEach(element = () => {
    console.log(element);
} )
