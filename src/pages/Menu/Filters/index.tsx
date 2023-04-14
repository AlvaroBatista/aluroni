import classNames from "classnames";
import filters from "./filters.json";
import styles from './Filters.module.scss';

type IOption = typeof filters[0];

interface FiltersProps {
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters({ filter, setFilter }: FiltersProps) {

  function selectedFilter(option: IOption) {
    if (filter === option.id) return setFilter(null);
    return setFilter(option.id);
  }

  return (
    <div className={styles.filters}>
      {filters.map(option => (
        <button 
        className={classNames({
            [styles.filters__filter]: true,
            [styles['filters__filter--active']]: filter === option.id
          })} 
          key={option.id} 
          onClick={() => selectedFilter(option)}>
          {option.label}
        </button>
      ))}
    </div>
  )
}