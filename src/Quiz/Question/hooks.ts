import { useState } from "react";

export const useHandleKeys = (initial: KeyboardEvent['key'][]) => {
  const [recentKeys, setRecentKeys] = useState<KeyboardEvent['key'][]>(initial);
  window.onkeydown = (e: any) => {
    e.preventDefault();
    const { key } = e;
    setRecentKeys([...recentKeys, key]);
  }
  const clearKeys = () => setRecentKeys([]);

  return { recentKeys, clearKeys };
}