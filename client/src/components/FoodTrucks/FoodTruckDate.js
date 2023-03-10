import "./FoodTruckDate.css"

const FoodTruckDate = (props) => {
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const year = props.date.getFullYear();

  return (<div className={"food-truck-date"}>
    <div className={"food-truck-date__day"}>{day}</div>
    <div className={"food-truck-date__month"}>{month}</div>
    <div className={"food-truck-date__year"}>{year}</div>
  </div>);
}

export default FoodTruckDate;