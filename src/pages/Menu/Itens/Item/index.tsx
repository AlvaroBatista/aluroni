import styles from './Item.module.scss'; 
import cardapio from '../itens.json';
import classNames from 'classnames';

type ItemProps = typeof cardapio[0];

export default function Item(props: ItemProps) {
  const { title, description, category, size, serving, photo, price } = props;
  
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title}/>
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <div className={styles.item__tags}>
        <div className={classNames({
            [styles.item__type]: true,
            [styles[`item__type__${category.label.toLowerCase()}`]]: true
          })}>{category.label}</div>
          <div className={styles.item__portion}>{size}</div>
          <div className={styles.item__qtdpeople}>serve {serving} pessoa{serving === 1 ? "" : "s"}</div>
          <div className={styles.item__value}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}