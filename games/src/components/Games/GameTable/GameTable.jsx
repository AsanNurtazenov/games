import { useEffect, useState } from "react";
import shuffle from './utils/shuffle'
import generateSequence from './utils/GenerateSequence'

export default function GameTable2() {
  const [grid, setGrid] = useState([(shuffle(Array.from(generateSequence(1, 25))))]);
    const [selected, setSelected] = useState(null);
    const [start, setStart] = useState(true);
    const [timer, setTimer] = useState(0);
  useEffect(() => {

  })
  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [start]);
  const handleCellClick = (value) => {
    if (value === selected + 1) {
      setSelected(value);
      if (value === 25) {
        setStart(false);
        alert('Поздравляем! В прошли игру за ' + timer + 'секунд.');
      }
    }
  }
  const handleStartClick = () => {
    setGrid([(shuffle(Array.from(generateSequence(1, 25))))]);
    setSelected(null);
    setStart(true);
    setTimer(0);
  }


  return (
    <div style={{}} >
      <div class="has-background-light container is-widescreen has-text-centered">
         <h1>Таблица Шульте</h1>
          <button className='button1' onClick={handleStartClick}>Начать игру заново</button>
         {start && <p> Время: {timer} сек.</p>}
         <div class="grid1 " >
            {grid.map((row, rowIndex) => (
                <div class="row1 has-tex-centered " key = {rowIndex} style={style.grid} >
                    {row.map((cell,cellIndex) => (
                        <div className={`cell1 ${selected === cell ? 'selected1' : ''}`}
                        key={cellIndex}
                        onClick={() => handleCellClick(cell)} >
                            {cell}
                       </div>
                    ))} 
                </div>
            ))}
         </div>
        
        </div>
    </div>
  );
}

const style = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 50px)",
    gridTemplateRows: "repeat(5, 50px)",
  },
};
const styles = {
  num: { borderRadius: '10px',
    boxShadow: '0 0 10px #c2c2c2',
    padding: '20px',
    fontSize: '20px'}
}