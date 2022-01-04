import { useState } from 'react';

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const handleAmount = (amount: number) => {
    setCounter((prev) => Math.max(prev + amount, 0));
  };
  return { counter, handleAmount };
};
