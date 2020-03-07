import { useState } from "react";

export const useHandleKeys = (initial: KeyboardEvent['code'][]) => {
  const [recentKeys, setRecentKeys] = useState<KeyboardEvent['code'][]>(initial);
  window.onkeydown = (e: any) => {
    if (e.key !== 'Enter') {
      e.preventDefault();
      const { code } = e;
      setRecentKeys([...recentKeys, code]);
    }
  }
  const clearKeys = () => setRecentKeys([]);

  return { recentKeys, clearKeys };
}