import "./FoodTrucksList.css";
import FoodTruckItem from "./FoodTruckItem";

const FoodTrucksList = (props) => {

  if(props.items.length === 0){
    return <h2 className={"food-trucks-list__fallback"}>Found no Food Truck</h2>
  }

  return (<ul className={"food-trucks-list"}>
    {props.items.map((foodTruck) => (<FoodTruckItem
        key={foodTruck.id}
        title={foodTruck.title}
        date={foodTruck.date}/>))}
  </ul>);

};

export default  FoodTrucksList;