import './FoodTruckForm.css';

import {useState} from "react";

const FoodTruckForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const foodTruckData = {
      title: enteredTitle,
      date: new Date(enteredDate)
    };
    console.log(foodTruckData);
    props.onSaveFoodTruckData(foodTruckData);
    setEnteredTitle('');
    setEnteredDate('');
  };
return <form onSubmit={submitHandler}>
  <div className={'new-food-truck__controls'}>
    <div className={'new-food-truck__control'}>
      <label>Title</label>
      <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
    </div>
    <div className={'new-food-truck__control'}>
      <label>Date</label>
      <input type="date" min="2022-01-01" max="2024-12-31" onChange={dateChangeHandler} value={enteredDate}/>
    </div>
  </div>
  <div className="new-food-truck__actions">
    <button type="button" onClick={props.onCancel}>Cancel</button>
    <button type="submit">Add Food Truck</button>
  </div>
</form>
}

export default FoodTruckForm;