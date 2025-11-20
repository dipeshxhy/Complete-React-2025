import { useState } from 'react';

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};
function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  const newDate = date.setDate(date.getDate() + count);
  const formattedDate = new Date(newDate).toLocaleDateString('en-US', options);

  let str = '';

  if (count === 0) {
    str = `Today is ${date.toLocaleDateString('en-US', options)}`;
  } else if (count > 0) {
    str = `${count} days from today is ${formattedDate}`;
  } else if (count < 0) {
    str = `${Math.abs(count)} days ago was ${formattedDate}`;
  }

  function handleStepDecrease() {
    setStep(s => s - 1);
  }
  function handleStepIncrease() {
    setStep(s => s + 1);
  }
  return (
    <div>
      <div className="step-label">
        <button onClick={handleStepDecrease}>&minus;</button>
        <span>Step:{step}</span>
        <button onClick={handleStepIncrease}> + </button>
      </div>
      <div className="count">
        <button onClick={() => setCount(c => c - step)}>&minus;</button>
        <span>count:{count}</span>
        <button onClick={() => setCount(c => c + step)}> + </button>
      </div>
      <p> {str}</p>
    </div>
  );
}

export default DateCounter;
