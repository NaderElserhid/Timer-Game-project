import { useRef, useState } from "react";

export default function Timerchallenge({title, targetTime}){
   const timer = useRef();

    const [timerStasted, setTimerStarted] = useState(false);
    const [timeExpired ,settimeExpired ]= useState(false);

    function handleStart(){
        timer.current = setTimeout(()=>{
            settimeExpired(true);
        }, targetTime * 1000);
        setTimerStarted(true);
    }
     
    function handleStop(){
        clearTimeout(timer.current);
    }

    return(
      <section className="challenge">
   <h2>{title}</h2>
   {timeExpired && <p> You lost! </p>}
   <p className="challenge-time">
    {targetTime} secund{targetTime >1 ? "s":""}
   </p>
   <p>
    <button onClick={timerStasted ? handleStop : handleStart}>
        {timerStasted ? "stop" : "start"} Challenge
    </button>
   </p>
   <p className={timerStasted ? "active" : undefined}>
    {timerStasted ? "time is running....." : "Timer inactive"}
   </p>
        </section>
    )
}