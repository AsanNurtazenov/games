import React, { useState, useEffect } from 'react';

const MathGame = () => {
  const [score, setScore] = useState(0);
  const [motion, setMotion] = useState(1);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [input, setInput] = useState('');

  const generateQuestion = () => {
    
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*', ];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let ans;
    switch (operator) {
      case '+':
        ans = num1 + num2;
        break;
      case '-':
        ans = num1 - num2;
        break;
      case '*':
        ans = num1 * num2;
        break;
      default:
        break;
    }

    setQuestion(`${num1} ${operator} ${num2}`);
    setAnswer(ans);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');

    if (parseInt(input) === answer) {
      setScore((prevScore) => prevScore + 1);
      setMotion (prevMotion=>prevMotion+1);
    } 
    else{
      setMotion (prevMotion=>prevMotion+1);
    }
    generateQuestion();
    
  };

  useEffect(() => {
    generateQuestion();
    
  }, []);

  return (
    <section class=''>
      <div class="container has-text-centered has-background-light">
      <h1>Математика</h1>
      <div className="columns">
        <div className="column"><p>Очков: {score}</p></div>
        <div className="column">Ход:{motion}</div>
      </div>
      
      <p>Задание: {question}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
</div>
    </section>
  );
};

export default MathGame;