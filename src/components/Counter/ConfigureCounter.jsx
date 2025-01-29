import React from "react";
import { useState } from "react";
import { log } from "../../log";
import Input from "../UI/Forms/Input";
import Button from "../UI/Forms/Button";

const ConfigureCounter = ({ onSet }) => {
  log("<ConfigureCounter />", 1);
  const [enteredNumber, setEnteredNumber] = useState(0);
  function handleSetClick() {
    onSet(enteredNumber);
    setEnteredNumber(0);
  }
  function handleInputChange(value) {
    setEnteredNumber(value);
  }
  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <Input onValueChange={handleInputChange} />
      <Button onClick={handleSetClick}>Set</Button>
    </section>
  );
};

export default ConfigureCounter;
