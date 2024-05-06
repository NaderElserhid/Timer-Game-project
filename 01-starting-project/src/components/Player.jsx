import { useState, useRef } from "react";

export default function Player() {

  const playername = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handelClick(){
   setEnteredPlayerName(playername.current.value)
  }

  return (
    <section id="player">
      <h2>welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input ref={playername} type="text" />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
