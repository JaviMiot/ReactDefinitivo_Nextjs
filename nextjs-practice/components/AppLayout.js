import styles from '../styles/components/AppLayout.module.css';
import Link from 'next/link';

const AppLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href='/'> Pokemones </Link>
        <nav className={styles.nav}>
          <ul className={styles.nav_options}>
            <li>
              <Link href='/'>Inicio</Link>
            </li>
            <li>
              <a href=''>Sing Up</a>
            </li>
            <li>
              <a href=''>Login</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Hecho con amor -> JM</footer>
    </div>
  );
};

export default AppLayout;
