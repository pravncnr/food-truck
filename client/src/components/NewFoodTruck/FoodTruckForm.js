import './FoodTruckForm.css';

import {useState} from "react";

const FoodTruckForm = (props) => {

  const [enteredName, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const foodTruckData = {
      name: enteredName,
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
      <label>Food Truck Name</label>
      <input type="text" onChange={nameChangeHandler} value={enteredName}/>
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