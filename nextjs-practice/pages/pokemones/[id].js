import AppLayout from '../../components/AppLayout';
import { useRouter } from 'next/router';
import Image from 'next/image';

const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f7f5ed',
    marginTop: '16px',
    boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
    borderRadius: '6px',
    padding: '15px',
    color: '#504a31',
  },
};

const Pokemon = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Cargando...</h1>;
  }
  
  const id = router.query.id;
  const imagen = data.sprites.other.dream_world.front_default;
  return (
    <AppLayout>
      <section style={styles.section}>
        <h1>
          {data.name.toUpperCase()} # {id}
        </h1>
        <Image src={imagen} width='400' height='400' alt={data.name} />
      </section>
    </AppLayout>
  );
};

export default Pokemon;

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const data = await response.json();
  return { props: { data } };
};

export const getStaticPaths = async () => {
  const paths = [{ params: { id: '1' } }];
  return { paths, fallback: true };
};
