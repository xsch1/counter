import { useState } from 'react';
import CountDisplay from './CountDisplay';
import ActionButton from './ActionButton';

function App() {
  const [count, setCount] = useState(50); // 초기값
  const [target] = useState(Math.floor(Math.random() * 101)); // 0~100
  const [message, setMessage] = useState('범위를 좁혀보세요!');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleIncrease = () => {
    if (!gameOver && count < 100) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (!gameOver && count > 0) {
      setCount(count - 1);
    }
  };

  const handleCheck = () => {
    if (gameOver) return;

    const newAttempts = attempts + 1;

    if (count === target) {
      setMessage(`정답! 🎉 ${newAttempts}번 만에 맞혔어요.`);
      setGameOver(true);
    } else if (count < target) {
      setMessage(`${count} 이상이에요.`);
    } else {
      setMessage(`${count} 이하에요.`);
    }

    setAttempts(newAttempts);
  };

  const handleReset = () => {
    setCount(50);
    setAttempts(0);
    setMessage('범위를 좁혀보세요!');
    setGameOver(false);
    window.location.reload(); // 새 게임 시작 (간단 구현)
  };

  return (
    <>
      <h1>숫자 맞추기 🙋</h1>
      <p>목표 숫자는 0~100 사이에 있습니다.</p>
      <CountDisplay count={count} />
      <ActionButton label="+1" func={handleIncrease} />
      <ActionButton label="-1" func={handleDecrease} />
      <ActionButton label="확인" func={handleCheck} />
      <ActionButton label="다시 시작" func={handleReset} />
      <p>{message}</p>
    </>
  );
}

export default App;
