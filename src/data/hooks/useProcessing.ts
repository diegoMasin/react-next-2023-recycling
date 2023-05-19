import { useState } from 'react';

export default function useProcessing() {
  const [processing, setProcessing] = useState<boolean>(false);

  function startProcessing() {
    setProcessing(true);
  }

  function endProcessing() {
    setProcessing(false);
  }

  return { processing, startProcessing, endProcessing };
}
