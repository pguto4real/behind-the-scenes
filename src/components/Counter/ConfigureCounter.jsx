import React from "react";
import { useState } from "react";
import { log } from "../../log";
import Input from "../UI/Forms/Input";

const ConfigureCounter = ({ onSet }) => {
  log("<ConfigureCounter />", 1);
  const [enteredNumber, setEnteredNumber] = useState(0);
  function handleSetClick() {
    onSet(enteredNumber);
    setEnteredNumber(0);
  }
  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }
  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <Input />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
};

export default ConfigureCounter;
