const FoodTruckDAO = require("../dao/foodTruckDAO");
const {validator} = require("../utils/validate");
const {HTTP_RESPONSE_CODE} = require("../config/constants");
const {handleError} = require("../utils/utils");

const FOOD_TRUCK_SCHEMA = {
  name: "required|string",
  date: "required|dateFormat:YYYY-MM-DD"
};

const FOOD_TRUCK_UPDATE_SCHEMA = {
  id: "required|integer",
  name: "string",
  date: "dateFormat:YYYY-MM-DD",
  '*': 'any:name,date'
};


const FOOD_TRUCK_DATE_SCHEMA = {
  date: "required|dateFormat:YYYY-MM-DD"
};


async function getFoodTrucks(req,res){
  try {
      console.log(`In getFoodTrucks`);
      let foodTruck = await new FoodTruckDAO().getFoodTrucks();
      res.status(HTTP_RESPONSE_CODE.OK).send(foodTruck);
  }catch (e){
      console.log(e)
      res.status(HTTP_RESPONSE_CODE.NOT_FOUND).send({message: `Failed to fetch Object!`});
  }
}

async function getFoodTrucksForDate(req,res){
  try {
    console.log(`In getFoodTrucksForDate`);
    console.log(req.params)
    let params = req.params
    await validator(params, FOOD_TRUCK_DATE_SCHEMA);
    let foodTruck = await new FoodTruckDAO().getFoodTrucksForDate(params.date);
    res.status(HTTP_RESPONSE_CODE.OK).send(foodTruck);
  }catch (e){
    console.log(e)
    res.status(HTTP_RESPONSE_CODE.NOT_FOUND).send({message: `Failed to fetch Object!`});
  }
}

async function createFoodTruck(req,res){
  try {
    console.log(`In createFoodTruck`);
      let params = req.body;
      console.log(params);
    await validator(params, FOOD_TRUCK_SCHEMA);
      let foodTruck = await new FoodTruckDAO().createFoodTruck(params);
      res.status(HTTP_RESPONSE_CODE.OK).send(foodTruck);
  }catch (e){
      console.log(e)
      res.status(HTTP_RESPONSE_CODE.BAD_REQUEST).send({message: `Failed to create Object!`,
        errors: `${JSON.stringify(e)}`});
  }
}

async function updateFoodTruck(req,res){
  try {
    console.log(`In updateFoodTruck`);
    let params = {...req.body, ...req.params};
    console.log(params);
    await validator(params, FOOD_TRUCK_UPDATE_SCHEMA);
    let foodTruck = await new FoodTruckDAO().updateFoodTruck(params);
    res.status(HTTP_RESPONSE_CODE.OK).send(foodTruck);
  }catch (e){
    console.log(e)
    res.status(HTTP_RESPONSE_CODE.NOT_FOUND).send({message: `Failed to update Object!`});
  }
}



module.exports = { getFoodTrucks,getFoodTrucksForDate,createFoodTruck, updateFoodTruck};
