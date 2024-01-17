
let a = "praia";
let b = "100";

if (a == "praia") {
    console.log("Certo");
} else {
    console.log("Errado");
}

let c = 10;

if (b === "10") {
    console.log("true");
} else {
    console.log("false");
}

if (a == "10" && b == "100") {
    console.log(true);
} else {
    console.log(false);
}

let d = 0;

while (d < 20) {
    
    console.log(d);

    d = d + 1;
} 

let arr = ["praia" , "cidade" , "campo" , "floresta" , "montanha" , 10 , 100]

for (let i = arr.length -1; i >= 0 ; i--) {  
    console.log(arr[i]);
}

let obj = {
    name: "Manuel",
    age: 13,
    gender: "male",
}

for (const key in obj) {
        console.log(obj[key]);
}
