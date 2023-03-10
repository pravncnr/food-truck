const db = require("../config/db");

class FoodTruckDAO {
  async getFoodTrucks() {
    console.log("getting food trucks")
    let results = await db.query(`select * from food_truck`).catch(console.log);
    console.log(results.rows);
    return results.rows;
  }

  async getFoodTrucksForDate(date) {
    console.log("getting food trucks for a date")
    let results = await db.query("select * from food_truck where date=$1", [date]);
    console.log(results.rows);
    return results.rows;
  }

  async createFoodTruck(foodTruck) {
    const result = await db.query("INSERT INTO food_truck (name, date) VALUES ($1, $2)", [foodTruck.name, foodTruck.date]);
  }

  async updateFoodTruck(foodTruck) {
    if (foodTruck.name && foodTruck.date){
      await db
        .query(`UPDATE food_truck SET name=$1,date=$2 WHERE id=$3`, [foodTruck.name,foodTruck.date, parseInt(foodTruck.id),])
        .catch();
    }
    else if (foodTruck.name){
      await db
        .query(`UPDATE food_truck SET name=$1 WHERE id=$2`, [foodTruck.name, parseInt(foodTruck.id),])
        .catch();
    }else{
      await db
        .query(`UPDATE food_truck SET date=$1 WHERE id=$2`, [foodTruck.date, parseInt(foodTruck.id),])
        .catch();
    }

  }

  async deleteFoodTruck(foodTruckId) {
    await db.query(`DELETE FROM food_truck WHERE id=$1`, [parseInt(foodTruckId)]).catch(console.log);
  }
}

module.exports = FoodTruckDAO;
