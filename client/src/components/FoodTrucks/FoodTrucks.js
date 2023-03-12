import React, {useState} from "react";
import Card from '../UI/Card';
import './FoodTrucks.css';
import FoodTrucksFilter from './FoodTrucksFilter';
import FoodTrucksList from "./FoodTrucksList";

const FoodTrucks = (props) => {
  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler =(selectedDate) => {
    console.log("clicked filter");
    setFilteredYear(selectedDate);
  };

  const filterClearHandler = (selectedDate) => {
    console.log("clicked clear");
    setFilteredYear(selectedDate);
  };

  let filteredFoodTrucks = props.items;

  if (filteredYear){
    filteredFoodTrucks = props.items.filter(foodTruck => {
      return filteredYear === foodTruck.date.toISOString().slice(0, 10);
    });
  }

  return (
    <div>
    <Card className="food-trucks">
      <FoodTrucksFilter selected={filteredYear} onChangeFilter={filterChangeHandler} onClearFilter={filterClearHandler} />
      <FoodTrucksList items={filteredFoodTrucks} />
    </Card>
    </div>
  );
}

export default FoodTrucks;