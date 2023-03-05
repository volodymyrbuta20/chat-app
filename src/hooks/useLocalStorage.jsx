import { useState, useEffect } from 'react';

const useLocalStorage = (key) => {
  const [value, setValue] = useState(() =>
    JSON.parse(localStorage.getItem(key))
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return { value, setValue };
};

export default useLocalStorage;
