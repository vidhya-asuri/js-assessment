exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
     return arr[item];
  },

  sum: function(arr) {
    var sumOfElements = 0; 
    for(var i=0; i < arr.length; i++){
      sumOfElements = arr[i] + sumOfElements; 
    }
    return sumOfElements;
  },

  remove: function(arr, item) {
    var indexOfItem = arr.indexOf(item);; 
    while(indexOfItem > -1){
      arr.splice(indexOfItem,1);
      indexOfItem = arr.indexOf(item);
    }
    return arr; 
  },

  removeWithoutCopy: function(arr, item) {
    var indexOfItem = arr.indexOf(item);; 
    while(indexOfItem > -1){
      arr.splice(indexOfItem,1);
      indexOfItem = arr.indexOf(item);
    }
    return arr; 

  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice((arr.length-1),1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0,0,item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat: function(arr1, arr2) {
    var arr = arr1.concat(arr2);
    return arr;
  },

  insert: function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count: function(arr, item) {
    var itemCount = 0;
    var i = 0;
    var indexOfItem = 0;
    while(i < arr.length){
      indexOfItem = arr.indexOf(item,i); // first occurence.
      if(indexOfItem > -1){
        itemCount = itemCount + 1; 
        i = indexOfItem +1;
      }
      else{
        i++;
      } 
    }
    return itemCount; 
  },

  duplicates: function(arr) {
    var duplicatesArr = new Array();
    for(var i=0; i < arr.length; i++){
      var occurences = this.count(arr,arr[i]);
      if(occurences > 1){
        if(duplicatesArr.indexOf(arr[i]) < 0){ 
          duplicatesArr.push(arr[i]);
        }
      } 
    }
    return duplicatesArr; 
  },
  square: function(arr) {
    var squaredArray = arr.map(function(currentValue){
      return currentValue * currentValue;
    }); 
    return squaredArray; 
  },

  findAllOccurrences: function(arr, target) {
    var itemIndices = new Array();
    var i = 0;
    var indexOfItem = 0;
    while(i < arr.length){
      indexOfItem = arr.indexOf(target,i); // first occurence.
      if(indexOfItem > -1){
        itemIndices.push(indexOfItem); 
        i = indexOfItem +1;
      }
      else{
        i++;
      }
    }
    return itemIndices;

  }
};
