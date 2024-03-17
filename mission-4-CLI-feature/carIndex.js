const mongoose = require("mongoose");

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// Connect to db
mongoose
  .connect("mongodb://localhost:27017/carAPI")
  .catch((err) => console.log(err));

// Import model
const Cars = require("./models/carsSchema");

// Add car
const addCar = (car) => {
  Cars.create(car).then((car) => {
    console.info("New car added");
    mongoose.connection.close();
  });
};

// export models

module.exports = {
  addCar,
};
