import {useState} from "react";
import "./FoodTruckItem.css"
import FoodTruckDate from "./FoodTruckDate";
import Card from "../UI/Card";
import EditFoodTruckForm from "../NewFoodTruck/EditFoodTruckForm";
import {FaPen} from 'react-icons/fa';

const FoodTruckItem = (props) => {
  const [name, setName] = useState(props.name);
  const [date, setDate] = useState(props.date);
  const [isEditing, setIsEditing] = useState(false);

  const clickHandler = () => {
    setIsEditing(true);
  };

  const completedEditingHandler = (id, name, date) => {
    console.log("completedEditingHandler");
    console.log(`completedEditingHandler ${id} ${name} ${date}`);
    setName(name);
    setDate(date);
    setIsEditing(false);
  };
  const cancelHandler = () => {
    console.log("cancelHandler");
    setIsEditing(false);
  };

  return (
    <li>
      <Card className={"food-truck-item"}>
        <FoodTruckDate date={props.date}></FoodTruckDate>
        <div className={"food-truck-item__description"}>
          <h2>{name}</h2>
        </div>
        {!isEditing && <FaPen onClick={clickHandler}> </FaPen>}
        <div>{isEditing &&
          <EditFoodTruckForm id={props.id} name={props.name} date={props.date.toISOString().slice(0, 10)}
                             onEdit={completedEditingHandler} onCancel={cancelHandler}
          ></EditFoodTruckForm>}</div>

      </Card>
    </li>
  );
}

export default FoodTruckItem;