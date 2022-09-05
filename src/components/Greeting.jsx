import React, { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);
  return (
    <div>
      <h2>Hello World!</h2>
      {changeText ? <p>Change</p> : <p>good to see you!</p>}
      <button
        onClick={() => {
          setChangeText(true);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Greeting;
