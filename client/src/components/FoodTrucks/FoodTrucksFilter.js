import React from 'react';

import './FoodTrucksFilter.css';

const FoodTrucksFilter = (props) => {

  const dayFilterHandler = (event) => {
    props.onChangeFilter(new Date().toISOString().slice(0, 10));
  };
  const allFilterHandler = (event) => {
    props.onClearFilter('');
  };

  return (
    <div className='food-trucks-filter'>
      <div className='food-trucks-filter__control'>
        <button onClick={dayFilterHandler} >Today's Food Trucks</button>
        <button onClick={allFilterHandler} >All Food Trucks</button>
      </div>
    </div>
  );
};

export default FoodTrucksFilter;