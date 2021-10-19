import { useRouter } from 'next/router';

const Desc = () => {
  const router = useRouter();
  console.log({ router });

  return (
    <div>
      <p>Descripcion de pokjemon</p>
    </div>
  );
};

export default Desc;
