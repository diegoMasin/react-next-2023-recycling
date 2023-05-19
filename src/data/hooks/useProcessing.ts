import { useCallback, useState } from 'react';

export default function useProcessing() {
  const [processing, setProcessing] = useState<boolean>(false);

  const startProcessing = useCallback(function () {
    setProcessing(true);
  }, []);

  const endProcessing = useCallback(function () {
    setProcessing(false);
  }, []);

  return { processing, startProcessing, endProcessing };
}
