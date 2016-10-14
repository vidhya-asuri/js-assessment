exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  //expect(numbersAnswers.valueAtBit(128, 8)).to.eql(1);
   var bitAsString = '0'.repeat(8);
   var stringWith_1_in_BitPosition;
   stringWith_1_in_BitPosition = bitAsString.substr(0, (8-bit)) + '1' + bitAsString.substr((8-bit)+1, bitAsString.length)
   var mask =  num & stringWith_1_in_BitPosition;
   var maskAsBinaryString = this.convertToBinary(mask); // (Number(mask).toString(2) >>> 0).toString();
   return Number(maskAsBinaryString.charAt(8-bit));
   //http://stackoverflow.com/questions/1436438/how-do-you-set-clear-and-toggle-a-single-bit-in-javascript?answertab=active#tab-top    
  },

  base10: function(str) {
     // return a base10 representation of str.
     return Number.parseInt(str,2);
  },

// Finding if a number is odd or even.
// http://blog.karlpurk.com/finding-odd-even-numbers-with-javascript-bitwise-operators/
  convertToBinary: function(num) {
     var result = (Number(num).toString(2) >>> 0).toString();
     var resultLen = result.length;
     if(resultLen < 8){
       var zeroPadLength = 8 - resultLen;
       result = '0'.repeat(zeroPadLength) + result;  
     }
     return result;
  },

  multiply: function(a, b) {
     var numDecimalsA = Number(a).toString().split(".").length >= 2 ? Number(a).toString().split(".")[1] : 0 ;  
     var numDecimalsB = Number(b).toString().split(".").length >= 2 ? Number(b).toString().split(".")[1] : 0 ;
     var precision = numDecimalsA * numDecimalsB; 
     if(numDecimalsA === 0 || numDecimalsB === 0)
     {
        precision = numDecimalsA > numDecimalsB ? numDecimalsA : numDecimalsB;
     }
     //return Math.round(Number.parseFloat(a * b),precision);
     return Number(Number.parseFloat(a * b).toPrecision(precision));
  }
};
