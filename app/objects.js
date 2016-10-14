exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.apply(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var allProperties = Object.getOwnPropertyNames(obj);
    var result = [];
    for(var i =0; i < allProperties.length; i++){
      var prop = allProperties[i] + ': ' + obj[allProperties[i]];
      result.push(prop);
    } 
    return result; 
  }
};

