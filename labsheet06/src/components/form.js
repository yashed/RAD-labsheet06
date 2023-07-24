import React from "react";
import { useState } from "react";

function Form() {
  const [message, Setmessage] = useState(" ");

  const handleInput = (event) => {
    Setmessage(event.target.value);
  };

  const displayValue = () => alert(message);
  return (
    <div>
      <form>
        <input
          type="text"
          name="input"
          id="input"
          onChange={handleInput}
          value={message}
        />
        <button onClick={displayValue}> Submit</button>
      </form>
    </div>
  );
}

export default Form;
