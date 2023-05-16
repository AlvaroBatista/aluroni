import cardapio from './itens.json'; 
import Item from './Item';
import styles from './Itens.module.scss';
import { useEffect, useState } from 'react';

interface ItensProps {
  search: string,
  filter: number | null,
  sort: string
}

export default function Itens(props: ItensProps) {
  const [list, setLista] = useState(cardapio);
  const { search, filter, sort } = props;

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(id: number) {
    if(filter !== null) return filter === id;
    return true;
  }

  function order(newList: typeof cardapio) {
    switch(sort) {
    case 'porcao': 
      return newList.sort((a, b) => a.size > b.size ? 1 : -1);
    case 'qtd_pessoas':
      return newList.sort((a,b) => a.serving > b.serving ? 1 : -1);
    case 'preco':
      return newList.sort((a,b) => a.price > b.price ? 1 : -1);
    default:
      return newList; 
    }
  }

  useEffect(() => {
    const newList = cardapio.filter(item => testSearch(item.title) && testFilter(item.category.id));
    setLista(order(newList));
  },[search, filter, sort]);

  return (
    <div className={styles.itens}>
      {list.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}