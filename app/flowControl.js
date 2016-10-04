exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number

    // num should not be NaN
    // num should not be null 
    // num should not be undefined.
    var returnValue;
    if( (Number.isNaN(num)) || (num === undefined) || (num === null) || !(Number.parseInt(num,10)) ){
        // num is either NaN or undefined or null
        returnValue = false;
    }
    else if( (num % 5 === 0) && (num % 3 !== 0) ){ 
        // divisible by 5
        returnValue = 'buzz';
    }
    else if( (num % 3 === 0) && (num % 5 !== 0) ){ 
        // divisible by 3
        returnValue = 'fizz';
    }
    else if( (num % 5 === 0) && (num % 3 === 0) ){ 
        // divisible by 5 and 3
        returnValue = 'fizzbuzz';
    }
    else if(!(Number.parseInt(num,10))){ 
        returnValue = false;
    }
    else{
        returnValue = num;
    }  
    return returnValue;
  } // end fizzbuzz
};
