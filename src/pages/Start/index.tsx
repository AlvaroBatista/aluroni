import menu from 'data/itens.json';
import styles from './Start.module.scss';

export default function Start() {
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3);

  return (
    <section>
      <h3 className={styles.title}>
        Recomendações da cozinha
      </h3>
      <div className={styles.suggestedItems}>
        {recommendedDishes.map(item => (
          <div key={item.id} className={styles.suggestedItem}>
            <div className={styles.suggestedItem__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.suggestedItem__button}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
