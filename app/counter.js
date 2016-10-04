/*var myCounterFunc = function(){
    var num = 111;
    while(num < 115) {
      var intervalID = setTimeout(function () {
         console.log(num);
      }, 100);
      num = num + 1;
    }
};

myCounterFunc();
*/

exports.countAnswers = {
  count: function (start,end) {
                  var timeoutID;
                  console.log(start);
                  for(var i=start+1; i <= end; i++){
                      console.log(i); //timeoutID = setTimeout( logToConsole(i), 100);
                  }
                  if(i > end){
                      clearTimeout(timeoutID);
                  }
         },
};

function logToConsole(i){
                  console.log(i);
};

/*
var timeoutID;

function callLogToConsole() {
  for(var i=0; i < 5; i++){ 
    timeoutID = setTimeout(logToConsole(i), 100);
  }
}

function logToConsole(num) {
  console.log(num);
}

function clearAlert() {
  clearTimeout(timeoutID);
}

callLogToConsole();
*/
