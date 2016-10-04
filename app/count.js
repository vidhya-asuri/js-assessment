exports = typeof window === 'undefined' ? global : window;
// http://stackoverflow.com/questions/14226803/javascript-wait-5-seconds-before-executing-next-line
var logToConsole= function(){
                    var num = 1;
                    console.log(num);
                };
exports.countAnswers = {
  startCounter : 0, 
  endCounter : 0, 
  count: function (start,end) {
                               var timeoutID;
                               setInterval(logToConsole, 100);
                               //for(var i=start; i < end; i++){
                                  //timeoutID = setTimeout(this.logToConsole, 100);
                               //}
         }
};

/*
var timeoutID, start = 1, end = 5;

function callLogToConsole(start,end) {
  for(var i=start; i < end; i++){
    timeoutID = setTimeout(logToConsole(i), 100);
  }
}

function logToConsole(num) {
  console.log(num);
}

function clearAlert() {
  clearTimeout(timeoutID);
}

callLogToConsole(start,end);




*/
