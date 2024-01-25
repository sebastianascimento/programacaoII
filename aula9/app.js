
    console.log("3");
    
    window.onload = () => {
        console.log("hello my name");
    }

    console.log("hello bicho");



    const addNumbers = (a , b) => {

        return  a + b; 
    }

    const result = addNumbers(7 , 6);
    console.log(result);


    const idMessage = (c , d) => {
        return c * d;
    }

    const mutli = idMessage(6 , 5);
    console.log(mutli);


    const resulFi = idMessage(mutli , 2);
    console.log(resulFi);


    const arr = [ 2 , 45 , 34 , 2];
 
    const mediaArr = (nums) => {
        let value = 0;
        nums.forEach(num => {
            value += num;
    });

    return value / nums.lenght;
}

    const result4 = mediaArr(arr);
    console.log(result4);

    const list = [ 3 , 4 , 5 , 6 , 7 ,8 , 10 , 13 , 24];

    for (let i = 0 ; i < list.length ; i++) {
        console.log(list[i]);
    }

    