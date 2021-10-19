import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useIsMounted = () => {
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setLoader(true);
    }
  }, [router.isReady]);

  return loader;
};

export default useIsMounted;
