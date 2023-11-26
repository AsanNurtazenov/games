import React, { useState } from 'react';
import shuffle from '../GameTable/utils/shuffle';
import generateSequence from '../GameTable/utils/GenerateSequence';
const Numbers = () => {
  const [number, setNumber] = useState(0);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(true)


  
  const generateNumber = () => {
    const newNumber = Math.floor(Math.random() * 10) + 1;
    setNumber(newNumber);

  };

  setTimeout(
    () => {
      setShow(false)
    },
    5000
  )
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const checkGuess = () => {
    if (input === setNumber) {
      setMessage('Пожалуйста, введите число.');
    } else if (parseInt(input) === setNumber) {
      setMessage('Правильно! Вы угадали число.');
    } else {
      setMessage('Неверно. Попробуйте еще раз.');
    }
    setInput('');
  };

  return (
    <div class='container has-text-centered'>
      <h1>Игра "Запомни число"</h1>
      <div>Число:{
        show && (<div className="alert">
            Привет
          </div>  )
          
      
      }</div>
      <p>Введите число от 1 до 10:</p>
      <input type="number" value={input} onChange={handleChange} />
      <button onClick={checkGuess}>Проверить</button>
      <p>{message}</p>
    </div>
  );
};
export default Numbers;