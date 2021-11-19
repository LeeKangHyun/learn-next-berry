import Link from 'next/link';
import styles from './nav.module.scss';

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.link}>❤️</a>
      </Link>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </nav>
  );
}

export default Nav;
