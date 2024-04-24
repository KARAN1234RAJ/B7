let company = {
  name: "DRF",
  pay: function () {
    console.log("Paying");
  },
}; 

let worker = {
  id: 1001,
  work: function () {
    console.log("Working");
  },
}; 

worker.__proto__ = company; //worker object inherits company object
console.log(worker);
worker.pay(); // calling method from company object using worker object.
