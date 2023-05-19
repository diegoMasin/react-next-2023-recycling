import { useCallback, useEffect, useState } from 'react';
import useProcessing from './useProcessing';

export default function useStarWars() {
  const { processing, startProcessing, endProcessing } = useProcessing();
  const [chars, setChars] = useState<any[]>([]);
  const [char, setChar] = useState<any>([]);
  const [films, setFilms] = useState<any>([]);

  const getChars = useCallback(
    async function () {
      try {
        startProcessing();
        const response = await fetch('http://swapi.dev/api/people/');
        const data = await response.json();
        setChars(data.results);
      } finally {
        endProcessing();
      }
    },
    [startProcessing, endProcessing],
  );

  const getFilms = useCallback(
    async function (char: any) {
      if (!char?.films?.length) return;
      try {
        startProcessing();
        const requests = char.films.map(async (film: string) => {
          const response = await fetch(film);
          return response.json();
        });

        const films = await Promise.all(requests);
        setFilms(films);
        console.log(films);
      } finally {
        endProcessing();
      }
    },
    [startProcessing, endProcessing],
  );

  function selectChar(character: any) {
    setChar(character);
  }

  function backToChars() {
    setChar(null);
    setFilms([]);
  }

  useEffect(() => {
    getChars();
  }, [getChars]);

  useEffect(() => {
    getFilms(char);
  }, [char, getFilms]);

  return { chars, films, processing, selectChar, backToChars };
}
