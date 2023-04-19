//https://timmousk.com/blog/react-call-function-in-child-component/

import Display from "./display";
import Timer from "./timer";
import { useState } from "react";

export default function Slideshow() {
    const [timerTrigger, setTimerTrigger] = useState(false);
    const [displayTrigger, setDisplayTrigger] = useState(false);
  
    // Conditions
    // when timer(current time) == 0
    // when next is called

    // Effect
    // setTimerTrigger(true);
    // when timerTrigger == true, setDisplayTrigger(true)
    // if displayTrigger == true, call function changeIndex(1);
    // setTimerTrigger(false)
    // setDisplayTrigger(false)
    // [timerTrigger, displayTrigger]

    return (
      <>
        <button
          onClick={() => {
            setTimerTrigger((trigger) => trigger + 1);
          }}
        >
          click
        </button>
        <Display trigger={displayTrigger} />
        <Timer trigger={timerTrigger} />
    </>
    );
  };