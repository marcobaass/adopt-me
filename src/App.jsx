import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Laika",
      animal: "Cat",
      breed: "EHK",
    }),
    React.createElement(Pet, {
      name: "Cherny",
      animal: "Cat",
      breed: "EHK",
    }),
    React.createElement(Pet, {
      name: "Franka",
      animal: "Cat",
      breed: "EHK",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
