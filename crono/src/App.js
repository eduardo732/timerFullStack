import React, {useEffect,useState} from 'react';
import './App.css';

const Timer = () => {
  const [second,setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    let intervalId;

    if(isActive){
      intervalId = setInterval(() => {
        const secondCounter = counter%60;
        const minuteCounter = Math.floor(counter/60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => counter + 1);
      }, 1000);
    }
    return ()=> clearInterval(intervalId);
  }, [isActive, counter]);

  function stopTimer(){
    addTime();
    setIsActive(false);
    setCounter(0);
    setSecond('00');
    setMinute('00');
    getTimes();
  }

  async function addTime(){
    try{
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({second: second, minute: minute})
      }
      let res = await fetch('http://localhost:4000/api/addTime', config);
      let json = await res.json();
      console.log(json);
    }catch(error){
      console.log(error);
    }
  }

  async function getTimes(){
    try{
      const config = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
      let res = await fetch('http://localhost:4000/api/getTimes', config);
      let json = await res.json();
      setTimes(json);
    }catch(error){
      console.log(error);
    }
  }
  

  return (
    <div className="container">
      <div className="time">
        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setIsActive(!isActive)} className="start">
          {isActive ? "Pause": "Start"}
        </button>
        <button onClick={stopTimer} className="reset">Reset</button>
      </div>
      {times.length > 0 &&
      <div className="timesList">
        {times.map(time => <div className='row' key={time.id}>{time.id}- {time.minutes}:{time.seconds}</div>)}
      </div>
      }
   </div>
  )
}

export default Timer;
