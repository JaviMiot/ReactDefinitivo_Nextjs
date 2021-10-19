import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Pokemon = ({ data }) => {
  const router = useRouter()
  console.log(router);

  //* Verifica si ya se tiene datos
  if(router.isFallback){
    return <p>Cargando</p>
  }
  return (
    <div>
      <h1>
        {data.name} número #{data.id}
      </h1>
      <Image
        src={data.sprites.front_default}
        height={400}
        width={400}
        alt={data.name}
      />
      <Link href='/'>Volver al Inicio</Link>
    </div>
  );
};

export default Pokemon;

export const getStaticProps = async ({ params }) => {
  console.log(params); //* este console log se ejecuta en el servidor
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const data = await response.json();
  return { props: { data } }; // estas props se las pasa al componente Pokemon
};

export const getStaticPaths  = async () => {
  const paths = [{ params: { id: '1' } }, { params: { id: '2' } }];
  //*en este caso paths es un array que
  //* que contiene un diccionario con los parametros
  //* que se les envia a la url si quiers mas parametros es
  /*
   * Seria:
   * const paths = [
   * { params: { id: '1' } }
   * { params: { id: '2' } }
   * { params: { id: '3' } }
   * ]
   */

  return {
    paths,
    fallback: true, //* esta debe 
    //* estar en true para q genere html bajo demanda
    //! Tambien puedes pasar la propiedad de 'blocking
    //! ejemplo fallback : 'blocking' esto hara que devuelva
    //! el componente cuando traiga todo de la api
  };
};

/* export const getServerSideProps = async ({ params }) => {
  console.log(params); //* este console log se ejecuta en el servidor
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const data = await response.json();
  return { props: { data } }; // estas props se las pasa al componente Pokemon
};
 */
