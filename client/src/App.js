import {useState, useCallback,useEffect} from "react";
import FoodTrucks from './components/FoodTrucks/FoodTrucks';
import NewFoodTruck from "./components/NewFoodTruck/NewFoodTruck";

import "./App.css"

const SERVER_URL = 'http://localhost:9000'

const App = () => {
  const [foodTrucks, setFoodTrucks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFoodTrucksHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(SERVER_URL+'/food-truck');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const loadedFoodTrucks = [];
      for (const truck of data) {
        loadedFoodTrucks.push({
          id: truck.id,
          name: truck.name,
          date: new Date(truck.date),
        });
      }
      setFoodTrucks(loadedFoodTrucks);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchFoodTrucksHandler();
  }, [fetchFoodTrucksHandler]);

  const addFoodTruckHandler = async (foodTruck) => {
    setIsLoading(true);
    setError(null);
    try {
      let body = {name : foodTruck.name,
      date: foodTruck.date.toISOString().slice(0, 10)};
      const response = await fetch(SERVER_URL+'/food-truck', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      data.date =  new Date(data.date);
      setFoodTrucks((prevFoodTrucks) => {
        return [data, ...prevFoodTrucks];
      });
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };
  return (
    <div className={"App-body"}>
      <NewFoodTruck onAddFoodTruck={addFoodTruckHandler}/>
      <FoodTrucks items={foodTrucks} />
    </div>
  );
}

export default App;
