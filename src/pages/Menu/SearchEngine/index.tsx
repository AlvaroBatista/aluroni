import React from 'react';
import styles from './SearchEngine.module.scss';
import { CgSearch } from 'react-icons/cg';

interface SearchEngineProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ search, setSearch }: SearchEngineProps) {
  return (
    <div className={styles.searchEngine}>
      <input
        value={search}
        onChange={(evento) => setSearch(evento.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}