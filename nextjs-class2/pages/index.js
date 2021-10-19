import Link from 'next/link';
import styled from 'styled-components';

const Button = styled.button`
 background-color: #23de;
 height: 60px;
 width: 160px;
`

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url
    .split('/')
    .filter((element) => element !== '')
    .pop();

  return (
    <li>
      <Link href={`/pokemones/${id}`}>{pokemon.name}</Link>
    </li>
  );
};

export default function Pokemones({ pokemones }) {
  return (
    <div>
      <p>Pokemones</p>
      <Button>Click me</Button>
      <ul>
        {pokemones.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </ul>
    </div>
  );
}

//* es una funcion que da como resultados los props que se enviaran al componente
export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json();
  return {
    props: { pokemones: data.results },
  };
};
