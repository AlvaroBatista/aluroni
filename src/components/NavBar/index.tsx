import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.menu}>
      <Logo />
    </nav>
  );
}