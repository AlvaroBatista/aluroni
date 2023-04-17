import styles from "./Sort.module.scss";
import options from "./options.json";
import React, { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

export type OptionsSort ='porcao' | 'qtd_pessoas' | 'preco' | ''

interface SortProps { 
  sort: OptionsSort,
  setSort: React.Dispatch<React.SetStateAction<OptionsSort>>
}

export default function Sort({
  sort,
  setSort
}: SortProps) {
  const [open, setOpen] = useState(false);
  const nameSort = sort && options.find(option => option.value === sort)?.name;

  return (
    <button
      className={classNames({
        [styles.sort]: true,
        [styles["sort--active"]]: sort !== ""
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{nameSort || "Ordenar Por"}</span>
      {open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> }
      <div className={classNames({
        [styles.sort__options]: true,
        [styles['sort__options--active']]: open
      })}>
        {options.map(option => (
          <div className={styles.sort__option} key={option.value} onClick={() => setSort(option.value as OptionsSort)}>
            {option.name}
          </div>
        ))}
      </div>
    </button>
  )
}