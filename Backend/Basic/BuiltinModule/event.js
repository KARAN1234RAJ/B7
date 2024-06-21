const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("event", () => {
  console.log("An event occurred!");
});

myEmitter.emit('event');

myEmitter.on('eventWithParams', (param1, param2) => {
     console.log(`Parameters received: ${param1}, ${param2}`);
   });
   
   myEmitter.emit('eventWithParams', 'arg1', 'arg2');
   

