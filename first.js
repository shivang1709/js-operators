//Find the first digit of a 4 digit number
//You are provided a four digit number N only. Your task is to print out the first digit of that number.

//Note: You have to complete First_Digit function. No need to take any input.


const First_Digit = (n) => {

    return (n-(n%1000))/1000;
    };

    console.log(First_Digit(4567));