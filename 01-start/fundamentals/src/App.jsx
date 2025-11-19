import { useEffect, useState } from 'react';

const App = () => {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(prevCount => prevCount + 1);
  }
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice </button>
      <Message count={count} />
    </div>
  );
};

export default App;

function Message({ count }) {
  return (
    <p>
      You have read <strong>{count}</strong> pieces of advice
    </p>
  );
}
