import React from "react";

function Toggle() {
  const [state, setState] = React.useState("Off");

  const changeState = () => {
    if (state === "Off") {
      setState("On");
    } else {
      setState("Off");
    }
  };
  return (
    <div>
      <h2> State : {state}</h2>
      <button onClick={changeState}>Change State</button>
    </div>
  );
}

export default Toggle;
