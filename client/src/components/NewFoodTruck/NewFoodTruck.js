import "./NewFoodTruck.css";
import "./FoodTruckForm"
import FoodTruckForm from "./FoodTruckForm";
import {useState} from "react";

const NewFoodTruck = (props) => {

  const [isEditing, setIsEditing] = useState(false);
  const saveFoodTruckDataHandler = (enteredFoodTruckData) => {
    const foodTruckData = {
      ...enteredFoodTruckData
    };
    console.log(foodTruckData);
    props.onAddFoodTruck(foodTruckData);
    setIsEditing(false);
  }
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (<div className={"new-food-truck"}>
    {!isEditing && <button onClick={startEditingHandler}>Add New Food Truck</button>}
    {isEditing &&
      <FoodTruckForm
        onSaveFoodTruckData={saveFoodTruckDataHandler}
        onCancel={stopEditingHandler}
      />}
  </div>);
}

export default NewFoodTruck;