const express = require("express");
const router = express.Router();
const {
  getFoodTrucks, getFoodTrucksForDate,
  createFoodTruck, updateFoodTruck
} = require('../controllers/foodTruckController');
const {HTTP_RESPONSE_CODE} = require("../config/constants");


router.get('/', async (req,res) =>{
  res.status(HTTP_RESPONSE_CODE.OK).send("Welcome to food truck API");
});
router.get('/food-truck', getFoodTrucks);
router.get('/food-truck/:date', getFoodTrucksForDate);
router.post('/food-truck', createFoodTruck);
router.put('/food-truck/:id', updateFoodTruck);


module.exports = router;