import {useState} from "react";
import Card from '../UI/Card';
import './FoodTrucks.css';
import FoodTrucksFilter from './FoodTrucksFilter';
import FoodTrucksList from "./FoodTrucksList";

const FoodTrucks = (props) => {
  const [filteredYear, setFilteredYear] = useState(new Date().toISOString().slice(0, 10));

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredFoodTrucks = props.items.filter(foodTruck => {
    return true;//filteredYear === foodTruck.date.toISOString().slice(0, 10);
  });


  return (
    <div>
    <Card className="food-trucks">
      {/*<FoodTrucksFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />*/}
      <FoodTrucksList items={filteredFoodTrucks} />
    </Card>
    </div>
  );
}

export default FoodTrucks;