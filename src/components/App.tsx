import { useEffect, useState } from 'react'
import styles from './App.module.css';
import { getAllItems } from '../lib/api/get';
import { Item } from '../lib/types/Item';

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    getAllItems().then(itemsResponse => setItems(itemsResponse));
  }, [setItems]);

  return (
    <>
      {items.map(({ name }) => {
        return <p key={name} className={styles.item}>{name}</p>
      })}
    </>
  )
}

export default App
