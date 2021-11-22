import Link from 'next/link';
import styles from './nav.module.scss';

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.link}>❤️</a>
      </Link>

      <ul>
        <li>
          <Link href="/vanilla/video">
            <a>비디오</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;