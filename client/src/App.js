import {useState} from "react";
import FoodTrucks from './components/FoodTrucks/FoodTrucks';
import NewFoodTruck from "./components/NewFoodTruck/NewFoodTruck";

import "./App.css"

const DUMMY_FOOD_TRUCKS = [{
  id: 'e1', title: 'Toilet Paper', date: new Date(2020, 7, 14),
}, {
  id: 'e2', title: 'New TV', date: new Date(2021, 2, 12)
}, {
  id: 'e3', title: 'Car Insurance', date: new Date(2021, 2, 28),
}, {
  id: 'e4', title: 'New Desk (Wooden)', date: new Date(2021, 5, 12),
},];


const App = () => {
  const [foodTrucks, setFoodTrucks] = useState(DUMMY_FOOD_TRUCKS);
  const addFoodTruckHandler = (foodTruck) => {
    setFoodTrucks((prevFoodTrucks) => {
      return [foodTruck, ...prevFoodTrucks];
    });
  };
  return (
    <div className={"App-body"}>
      <NewFoodTruck onAddFoodTruck={addFoodTruckHandler}/>
      <FoodTrucks items={foodTrucks} />
    </div>
  );
}

export default App;
