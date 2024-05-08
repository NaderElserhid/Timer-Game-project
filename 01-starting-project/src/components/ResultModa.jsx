import { forwardRef } from "react"

 const ResultModa = forwardRef(function ResultModa ({result, targetTime},ref ){
    return(
        <dialog ref={ref} className="result-modal" open>
    <h2> you {result}</h2>
    <p> the target time was <strong>{targetTime}seconds.</strong>
    </p>
    <p>you stopped the timer with <strong>x seconds left.</strong> </p>
    <form method="dialog">
        <button>Close</button>
    </form>
        </dialog>
    )
})

export default ResultModa;