import React, { useState, useRef, useEffect } from 'react'
import timerIcon from './timer.svg';
//import timerImg from './timer.svg';

const timerStyle = {
    width: "25px",
    height: "25px",
    objectFit: "contain",
}

const Timer = () => {
  
    const Ref = useRef(null);
  

    const [timer, setTimer] = useState('00:00');
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
  
  
    const clearTimer = (e) => {
        // TO DO--Set Custom Time
        setTimer('00:30');

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getRemainingTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 30);
        return deadline;
    }
  
    useEffect(() => {
        clearTimer(getRemainingTime());
    }, []);
  
    
    const resetTimer = () => {
        clearTimer(getRemainingTime());
    }

    //TO-DO -- Test This
    //useEffect(() => {
    // if (timerTrigger) {
    //  onClickReset();
    //}, [timerTrigger]))
  
   return(
        <div className="App">
            <h2><img src={timerIcon} style={timerStyle} /> {timer}</h2>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}
  
export default Timer;