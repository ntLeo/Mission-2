import { Command } from "commander";
const program = new Command();
import inquirer from "inquirer";

import { addCar } from "./carIndex.js";

// Car Questions
const questions = [
  {
    type: "input",
    name: "model",
    message: "Car Model Type",
  },
  {
    type: "input",
    name: "year",
    message: "Car Model Year",
  },
  {
    type: "input",
    name: "image",
    message: "Car Image File Name and Type (e.g. car.jpg)",
  },
];

program.version("1.0.0").description("Cars Management System");

program
  .command("add")
  .alias("a")
  .description("Add a car to the database")
  .action(() => {
    inquirer.prompt(questions).then((answers) => addCar(answers));
  });

program.parse(process.argv);
