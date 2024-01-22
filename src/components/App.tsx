import { useEffect, useState } from 'react'
import styles from './App.module.css';
import { getAllItems } from '../lib/api/get';
import { Item } from '../lib/types/Item';
import Shell from './shell/Shell';

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    getAllItems().then(itemsResponse => setItems(itemsResponse));
  }, [setItems]);

  return (
    <main className={styles.main}>
      <Shell>
          {JSON.stringify(items)}
      </Shell>
    </main>
  )
}

export default App
