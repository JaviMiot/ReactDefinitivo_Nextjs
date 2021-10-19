import useIsMounted from '../../hooks/useIsMounted';
import { useRouter } from 'next/router';

const ChanchitoDinamico = () => {
  const isMounted = useIsMounted();
  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  console.log({router})
  return (
    <div>
      <p>Chanchito dinamico</p>
    </div>
  );
};

export default ChanchitoDinamico;
