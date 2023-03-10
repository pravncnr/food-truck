import React, {useState} from 'react';

import './FoodTrucksFilter.css';

const FoodTrucksFilter = (props) => {

  // const [filteredDate, setFilteredDate] = useState('');

  // const dateChangeHandler = (event) => {
  //   setFilteredDate(event.target.value);
  // };
  const dropdownChangeHandler = (event) => {
    console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='food-trucks-filter'>
      <div className='food-trucks-filter__control'>
        <label>Filter by year</label>
        <input type="date" min="2022-01-01" max="2024-12-31" onChange={dropdownChangeHandler} value={new Date().toISOString().slice(0, 10)}/>
      </div>
    </div>
  );
};

export default FoodTrucksFilter;