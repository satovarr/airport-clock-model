import './App.css';
import ClockForm from './components/ClockForm';
import Clock from './components/Clock';

import { useEffect, useState } from "react";


function App() {

  const [clockColor, setClockColor] = useState("")
  const [clockProps, setClockProps] = useState({
    checkin: 0,
    vuelo: 0,
    hora: 0,
    registro: 0,
    sellar: 0,
    temporada: 0,
    experiencia: 0,
    equipajeEspecial: 0,
    acompanantes: 0,
  });

  useEffect(() => {
    
    const t =
      clockProps.acompanantes *  clockProps.checkin * 20 +
      clockProps.vuelo * 10 +
      clockProps.hora * 5 +
      clockProps.registro * (10 + clockProps.sellar * 5) +
      clockProps.temporada * 10 +
      30 / (clockProps.experiencia+1) +
      clockProps.equipajeEspecial * 10;
    
    console.log(t)
    
    if (t < 90) setClockColor("green")
    else if (t < 130) setClockColor("orange")
    else setClockColor("red")

  }, [clockProps])

  return (
    <div className="App">
      <ClockForm clockProps={clockProps} setClockProps={setClockProps}/>
      <Clock clockColor={clockColor}></Clock>
    </div>
  );
}

export default App;
