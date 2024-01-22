import { useEffect, useState } from 'react'
import styles from './App.module.css';
import { getMessage } from '../apiClient/get';

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    getMessage().then(message => setMessage(message));
  }, [message]);

  return (
    <>
      <p className={styles.message}>{message}</p>
    </>
  )
}

export default App
