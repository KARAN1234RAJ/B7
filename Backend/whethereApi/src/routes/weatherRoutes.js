const express = require("express");
const router = express.Router();
const weatherController = require("../controller/weatherController");
console.log(weatherController);

router.get("/city/zipcode/:code", async (req, res) => {
     console.log(req.params.code);
     try {
       const zipCode = req.params.code;
       console.log("From Route", zipCode);
       const weatherData = await weatherController.getWeatherDataByZipCode(zipCode);
       console.log(weatherData);
       res
         .status(200)
         .json({
           status: "success",
           message: "Weather data retrieved",
           data: weatherData,
         });
     } catch (error) {
       res
         .status(404)
         .json({
           status: "error",
           message: "ZipCode not found",
           error: error.message,
         });
     }
   });
   
   module.exports = router;