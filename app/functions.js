exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
           var greeting = '',
               name = '';
           for(var i=0; i < arr.length; i++){
               if( (arr[i] !== undefined) && (i !==0) && (i !== (arr.length-1) )  ){
                  // i is not the first or the last element, somwhere in the middle.
                  name = name + arr[i];
               } 
               else if( (arr[i] !== undefined) && (i ===0) ){
                  // i is the first element
                  greeting = arr[i];
               }
           }
           var result = fn(greeting,name);
           return result;
  },

  speak: function(fn, obj) {
    var result = fn.call(obj);
    return result;
  },

  functionFunction: function(str) {
    function innerFunction(str1) {
	return str + ", " + str1;
    };
    return innerFunction; 
 
  },
/*
  it('you should be able to use closures', function () {
    var arr = [ Math.random(), Math.random(), Math.random(), Math.random() ];
    var square = function (x) { return x * x; };

    var funcs = functionsAnswers.makeClosures(arr, square);
    expect(funcs).to.have.length(arr.length);

    for (var i = 0; i < arr.length; i++) {
      expect(funcs[i]()).to.eql(square(arr[i]));
    }
  });

*/
  makeClosures: function(arr, fn) {
   // referred to this link to understand how to return functions 
   // http://stackoverflow.com/questions/19696015/javascript-creating-functions-in-a-for-loop
   // article on Immediately Invoked Function Expressions 
   // http://benalman.com/news/2010/11/immediately-invoked-function-expression/
    var result = [];
    /*var fn_arr = function(fn,i){
        var retFunc = function(){
                         fn(arr[i]);
                      };
        return retFunc;
    };*/
    for(var i=0; i < arr.length; i++){
         //result[i] = (function(val) { return function(){  return val; }})(i);
         result[i] = (function outer(i) { 
                               return function inner() { 
                                               return fn(arr[i]);
                                      }
                      })(i);         

 
    } 
    return result;   
  },

  /* 
   Greate article explaining the difference between functions 
   and function expressions.
  */
  // http://benalman.com/news/2010/11/immediately-invoked-function-expression/
  // http://benalman.com/news/2012/09/partial-application-in-javascript/
  partial: function(fn) {
  // A reference to the Array#slice method.
    var slice = Array.prototype.slice;
  // Convert arguments object to an array, removing the first argument.
    var args = slice.call(arguments, 1);

    return function() {
       // Invoke the originally-specified function, passing in all originally-
       // specified arguments, followed by any just-specified arguments.
       return fn.apply(this, args.concat(slice.call(arguments, 0)));
    };

  },

  useArguments: function() {
    /*
        expect(functionsAnswers.useArguments(a)).to.eql(a);
    expect(functionsAnswers.useArguments(a, b)).to.eql(a + b);
    expect(functionsAnswers.useArguments(a, b, c)).to.eql(a + b + c);
    expect(functionsAnswers.useArguments(a, b, c, d)).to.eql(a + b + c + d);
    */
    // convert all but the first element of the arguments array-like object
    // into an array.
    var args = Array.prototype.slice.call(arguments,0);
    var nArgs = this.length;
    var total = 0;
    for(var i=0; i < args.length; i++){
       total = total + args[i];
    } 
    return total;
  },

  callIt: function(fn) {
   /*       functionsAnswers.callIt(iTake2Arguments, a, b);
      functionsAnswers.callIt(iTake3Arguments, a, b, c);
   */
     var args = Array.prototype.slice.call(arguments,1);
     fn.apply(this, args);  
   
  },

  partialUsingArguments: function(fn) {

  },
  // http://benalman.com/news/2012/09/partial-application-in-javascript/

  // http://www.datchley.name/currying-vs-partial-application/
  curryIt: function(fn) {
   var args = Array.prototype.slice.call(arguments,1);
   return function curried(arg){
     var args1 = Array.prototype.slice.call(arguments);
     var fnArgs = args.concat(args1);
     if(fnArgs.length >= fn.length){
        return  fn.apply(null,fnArgs); 
     }
     else{
        return function(argsN){
          var rest = Array.prototype.slice.call(arguments);
          return curried.apply(null,Array.prototype.slice.call(fnArgs).concat(rest));
        };
     }  

   };
 
  } // end curryIt
};


/*

// http://benalman.com/news/2012/09/partial-application-in-javascript/
function curry(fn, n) {
  // If `n` argument was omitted, use the function .length property.
  if (typeof n !== 'number') {
    n = fn.length;
  }

  function getCurriedFn(prev) {
    return function(arg) {
      // Concat the just-specified argument with the array of
      // previously-specified arguments.
      var args = prev.concat(arg);
      if (args.length < n) {
        // Not all arguments have been satisfied yet, so return a curried
        // version of the original function.
        return getCurriedFn(args);
      } else {
        // Otherwise, invoke the original function with the arguments and
        // return its value.
        return fn.apply(this, args);
      }
    };
  }

  // Return a curried version of the original function.
  return getCurriedFn([]);
}


// http://blog.carbonfive.com/2015/01/14/gettin-freaky-functional-wcurried-javascript/

function curry(fx) {
  var arity = fx.length;

  return function f1() {
    var args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) {
      return fx.apply(null, args);
    }
    else {
      return function f2() {
        var args2 = Array.prototype.slice.call(arguments, 0);
        return f1.apply(null, args.concat(args2)); 
      }
    }
  };
}


*/
