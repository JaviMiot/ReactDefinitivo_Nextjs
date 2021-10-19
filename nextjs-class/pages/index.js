import Link from 'next/link';
import Image from 'next/image';
import github from '../public/github.png';

//<Image src='/github.png' width={400} height={400} alt='logo' />
export default function Home() {
  return (
    <div>
      <p>Javi</p>
      <Link href='/chanchitos'>Ir a chanchitos</Link>
      <Image src={github} width={400} height={400} alt='logo' />
    </div>
  );
}
