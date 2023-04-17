import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import SearchEngine from "./SearchEngine";
import { useState } from "react";
import Filters from "./Filters";
import Sort, { OptionsSort } from "./Sort";
import Itens from './Itens';

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [sort, setSort] = useState<OptionsSort>("");

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <SearchEngine search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filters filter={filter} setFilter={setFilter}/>
          <Sort sort={sort} setSort={setSort} />
        </div>
        <Itens search={search} filter={filter} sort={sort}/>
      </section>
    </main>
  )
}