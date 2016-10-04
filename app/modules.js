exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
     var module = {
       greeting: str1,
       name: str2,
       sayIt: function(){
         return this.greeting + ', ' + this.name; 
       } 
    };
    return module;
  }
};


/*
    var module = modulesAnswers.createModule('hello', 'matt');

    expect(module.sayIt).to.be.a('function');
    expect(module.name).to.eql('matt');
    expect(module.greeting).to.eql('hello');
    expect(module.sayIt()).to.eql('hello, matt');

    module.name = 'katniss';
    module.greeting = 'hi';
    expect(module.name).to.eql('katniss');
    expect(module.greeting).to.eql('hi');
    expect(module.sayIt()).to.eql('hi, katniss');
*/
