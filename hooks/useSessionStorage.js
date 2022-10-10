// source: https://usehooks.com/useLocalStorage/

import { useEffect, useState } from "react";

export default function useSessionStorage(key, initialValue) {
  // State to store our value
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    // Get from session storage by key
    const item = window.sessionStorage.getItem(key);

    if (item) {
      setStoredValue(JSON.parse(item));
    }
  }, [key]);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to sessionStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
