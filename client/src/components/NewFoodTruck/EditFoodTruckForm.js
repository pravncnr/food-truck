import './EditFoodTruckForm.css';

import {useState} from "react";

const SERVER_URL = 'http://localhost:9000'


const EditFoodTruckForm = (props) => {
  const [enteredName, setEnteredName] = useState(props.name);
  const [enteredDate, setEnteredDate] = useState(props.date);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const editCompletedHandler = (id, name, date) => {
    props.onEdit(id, name, date);
  };


  const submitHandler =async (event) => {
    event.preventDefault();
    const foodTruckData = {
      id: props.id,
      name: enteredName,
      date: new Date(enteredDate)
    };
    console.log(" in submitHandler")
    console.log(foodTruckData);
    await editFoodTruckHandler(foodTruckData);
    setEnteredName('');
    setEnteredDate('');
  };

  const editFoodTruckHandler = async (foodTruck) => {
    try {
      let body = {name : foodTruck.name,
        date: foodTruck.date.toISOString().slice(0, 10)};
      const response = await fetch(`${SERVER_URL}/food-truck/${foodTruck.id}`, {
          method: 'PUT',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      console.log(" in editFoodTruckHandler");
      editCompletedHandler(props.id, enteredName, enteredDate);
    } catch (error) {
      console.log(`error while editing ${error}`);
    }
  };
return <form onSubmit={submitHandler}>
  <div className={'edit-food-truck__controls'}>
    <div className={'edit-food-truck__control'}>
      <label>Food Truck Name</label>
      <input type="text" onChange={nameChangeHandler} value={enteredName}/>
    </div>
    <div className={'edit-food-truck__control'}>
      <label>Date</label>
      <input type="date" min="2022-01-01" max="2024-12-31" onChange={dateChangeHandler} value={enteredDate}/>
    </div>
  </div>
  <div className="edit-food-truck__actions">
    <button type="button" onClick={props.onCancel}>Cancel</button>
    <button type="submit">Save</button>
  </div>
</form>
}

export default EditFoodTruckForm;