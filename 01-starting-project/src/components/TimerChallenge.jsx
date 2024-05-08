import { useRef, useState } from "react";
import ResultModa from "./ResultModa";

export default function Timerchallenge({title, targetTime}){
   const timer = useRef();
   const dialog = useRef();

    const [timerStasted, setTimerStarted] = useState(false);
    const [timeExpired ,settimeExpired ]= useState(false);

    function handleStart(){
        timer.current = setTimeout(()=>{
            settimeExpired(true);
            dialog.current.showModal();
        }, targetTime * 1000);
        setTimerStarted(true);
    }
     
    function handleStop(){
        clearTimeout(timer.current);
    }

    return(
        <>
 <ResultModa ref={dialog}targetTime={targetTime} result="lost" />
      <section className="challenge">
   <h2>{title}</h2>
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
        </>
    )
}