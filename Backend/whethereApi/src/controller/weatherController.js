const fs = require('fs');


async function getDataFromDatabase() {
     return new Promise((resolve, reject) => {
       fs.readFile("../data/data.json", (err, data) => {
         if (err) {
           reject(err);
         } else {
          console.log("data==",JSON.parse(data));
           resolve(JSON.parse(data));
         }
       });
     });
   }

   async function getWeatherDataByZipCode(zipCode) {
     console.log("from controller",zipCode);
     try {
       let result = await getDataFromDatabase();
       console.log("cityData", result);
       const cityWeatherData = result.find((data) => data.zipCode == zipCode);
       console.log("cityWeatherData", cityWeatherData);
       if (cityWeatherData) {
         return cityWeatherData.forecast;
       } else {
         throw new Error(`ZipCode not found`);
       }
     //   console.log("cityWeatherData", cityWeatherData);
     } catch (err) {
       console.log(err);
       throw new Error(`ZipCode not found`);
     }
   }
  //  getDataFromDatabase()
  // getWeatherDataByZipCode(2000)
   module.exports = {
     getWeatherDataByZipCode,
   };