let company = {
  name: "DRF",
  pay: function () {
    console.log("Paying");
  },
};
let intern = Object.create(company, {
  experience: { value: 2 },
}); //creating intern object from company object
console.log(intern);
