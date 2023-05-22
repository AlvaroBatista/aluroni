import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const routes = [{
    label: 'Início',
    to: '/'
  }, {
    label: 'Cardápio',
    to: '/cardapio'
  }, {
    label: 'Sobre',
    to: '/sobre'
  }];

  return (
    <nav className={styles.navBar}>
      <Logo />
      <ul className={styles.navBar__list}>
        {routes.map((route, index) => (
          <li key={index} className={styles.navBar__link}> 
            <Link to={route.to}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}