import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // setStep(s => (s <= 1 ? 1 : s - 1));
    if (step > 1) setStep(s => s - 1);
  }
  function handleNext() {
    // setStep(s => (s >= 3 ? 3 : s + 1));
    if (step < 3) setStep(s => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(val => !val)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button onClick={handlePrevious} className="btn btn--prev">
              Previous
            </button>
            <button onClick={handleNext} className="btn btn--next">
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Steps;
