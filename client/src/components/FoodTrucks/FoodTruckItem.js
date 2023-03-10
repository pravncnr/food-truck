import {useState} from "react";
import "./FoodTruckItem.css"
import FoodTruckDate from "./FoodTruckDate";
import Card from "../UI/Card";

const FoodTruckItem= (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };

  return (
    <li>
      <Card className={"food-truck-item"}>
        <FoodTruckDate date={props.date}></FoodTruckDate>
        <div className={"food-truck-item__description"}>
          <h2>{props.title}</h2>
        </div>
        <button onClick={clickHandler}>change state</button>
      </Card>
  </li>
  );
}

export default FoodTruckItem;