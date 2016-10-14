  exports = typeof window === 'undefined' ? global : window;

  exports.recursionAnswers = {
    listFiles: function(data, dirName) {
      var listOfFiles = [];
        function getListOfFiles(data, dirName){
          if(dirName !== undefined){
            function getFilesInDir(data, dirName){
                if(Array.isArray(data)){
                  for(var i=0; i < data.length; i++){
                    if(typeof data[i] === 'string') {
                         if(data[i] === dirName){
                            listOfFiles.push(data.files[i]);
                         }
                    }
                    else{
                        // data is array and the two types of objects in data are string and array.
                        getFilesInDir(data[i], dirName);  
                    }
                  }
                }
                else if(typeof data === 'string'){
                        if(data === dirName){
                           listOfFiles.push(data);
                        }
                }
                else{ // typeof data is not array or string.
                  if(data.dir === dirName) {
                    for(var i=0; i < data.files.length; i++){
                       if(typeof data.files[i] === 'string'){
                            listOfFiles.push(data.files[i]);
                       }
                       else{
                            getListOfFiles(data.files[i]);
                       }
                    }
                  }
                }  
                return listOfFiles;
            }
            var keys = Object.keys(data);
            for(var i = 0; i < keys.length; i++){
                 listOfFiles = getFilesInDir(data[keys[i]], dirName);
            }
            return listOfFiles;
         } // if(dirName !== undefined)  
         else{  // // we are not given a directory name, so loop through and find all strings and push to listOfFiles.
            if(Array.isArray(data)){
              for(var i=0; i < data.length; i++){
                  if(typeof data.files[i] === 'string'){
                     listOfFiles.push(data.files[i]);
                  }
                  else{
                     getListOfFiles(data.files[i]);
                  }
              }
            }
            else{
              for(var i=0; i < data.files.length; i++){
                  if(typeof data.files[i] === 'string'){
                     listOfFiles.push(data.files[i]);
                  }
                  else{
                     getListOfFiles(data.files[i]);
                  }
              }
            }
            return listOfFiles;
        } 
      }
      if(dirName === undefined){
          var result =  getListOfFiles(data);
          return result;
      }
       else{
          var result =  getListOfFiles(data, dirName);
          return result;
      }
    },
    permute: function(arr) {
    },

    fibonacci: function(n) {
      // enumerate the Fibonacci sequence upto the nth number and return the last value.
      var fibo = [];
      fibo[0] = 1; 
      fibo[1] = 1;
      for(var i = 2; i < n; i++){
          fibo.push(fibo[i-1] + fibo[i-2]); 
      }
      return fibo[n-1]; 
    },

    validParentheses: function(n) {

    }
  };
