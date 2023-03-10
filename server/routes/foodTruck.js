const express = require("express");
const router = express.Router();
const {
  getFoodTrucks, getFoodTrucksForDate,
  createFoodTruck, updateFoodTruck
} = require('../controllers/foodTruckController');


router.get('/', getFoodTrucks);
router.get('/food-truck/:date', getFoodTrucksForDate);
router.post('/food-truck', createFoodTruck);
router.put('/food-truck/:id', updateFoodTruck);


module.exports = router;