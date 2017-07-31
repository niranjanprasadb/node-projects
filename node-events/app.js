var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

var harsha = new Person('Harsha');
var anvi = new Person('Anvi');
var jaanvi = new Person('Jaanvi');

var myKids = [harsha, anvi,jaanvi];

myKids.forEach(kid => {
  kid.on('speak', msg => {
    console.log(`${kid.name} said ${msg}`);
  });
});

harsha.emit('speak', 'I Love Pizza');
anvi.emit('speak', 'I Love Coke');
jaanvi.emit('speak', 'I Love Cake');
