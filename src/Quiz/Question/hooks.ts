import { useState } from "react";

export const handleKeys = () => {
  const [recentKeys, setRecentKeys] = useState<string[]>([]);
  window.onkeydown = (e: any) => {
    const { key } = e;
    setRecentKeys([...recentKeys, key]);
  }
  const clearKeys = () => setRecentKeys([]);

  return { recentKeys, clearKeys };
}