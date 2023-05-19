import { useState } from 'react';
import useProcessing from './useProcessing';

export default function useStarWars() {
  const { processing, startProcessing, endProcessing } = useProcessing();
  const [chars, setChars] = useState<any>([]);

  async function getChars() {
    try {
      startProcessing();
      const response = await fetch('http://swapi.dev/api/people/');
      const data = await response.json();
      setChars(data.results);
    } finally {
      endProcessing();
    }
  }

  return { chars, getChars, processing };
}
