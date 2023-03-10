const express = require("express");

const cors = require("cors");

const app = express();

const foodTruckRoutes = require('./routes/foodTruck');

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({
  extended:true
}));


app.use(foodTruckRoutes);

const PORT = process.env.PORT  || 9000;

app.listen(PORT, () => {
  console.log(`app started on port ${PORT}`)
});