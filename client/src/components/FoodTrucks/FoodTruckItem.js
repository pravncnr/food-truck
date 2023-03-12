import {useState} from "react";
import "./FoodTruckItem.css"
import FoodTruckDate from "./FoodTruckDate";
import Card from "../UI/Card";

const FoodTruckItem= (props) => {
  const [name, setName] = useState(props.name);
  const clickHandler = () => {
    setName("updated");
  };

  return (
    <li>
      <Card className={"food-truck-item"}>
        <FoodTruckDate date={props.date}></FoodTruckDate>
        <div className={"food-truck-item__description"}>
          <h2>{props.name}</h2>
        </div>
        <button onClick={clickHandler}>change state</button>
      </Card>
  </li>
  );
}

export default FoodTruckItem;