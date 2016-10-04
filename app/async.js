exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var promise = new Promise(
        function(resolve,reject){
           resolve(value);  
        }
    );
    return promise;
  },

  manipulateRemoteData: function(url) {
     var promise = new Promise(
         function(resolve, reject){
            var xhr = new XMLHttpRequest();
            xhr.open('get',url,true);
            xhr.responseType = 'json';
            xhr.onload = function(){
              var status = xhr.status;
              if(status == 200) {
                var response = xhr.response;
                var response_as_array = Array.from(response.people, x => x.name);
                response_as_array = response_as_array.sort(); 
                //response = response.people.sort();
                resolve(response_as_array);
              }
              else {
                reject(status);
              }
            }; // onload 
            xhr.send();
         } // function(resolve,reject)
     );
     return promise; 
  }
};
/*
  it('you should be able to retrieve data from the server and return a sorted array of names', function(done) {
    var url = '/data/testdata.json';

    asyncAnswers.manipulateRemoteData(url).then(function(result) {
      expect(result).to.have.length(5);
      expect(result.join(' ')).to.eql('Adam Alex Matt Paul Rebecca');
      done();
    });
  });
});

  it('you should understand how to use promises to handle asynchronicity', function(done) {
    var flag = false;
    var finished = 0;
    var total = 2;

    function finish(_done) {
      if (++finished === total) { _done(); }
    }

    asyncAnswers.async(true).then(function(result) {
      flag = result;
      expect(flag).to.eql(true);
      finish(done);
    });

    asyncAnswers.async('success').then(function(result) {
      flag = result;
      expect(flag).to.eql('success');
      finish(done);
    });



*/
