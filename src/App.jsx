import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.scss'
import {Header} from './components/Header/Header.jsx'
import {Commics} from './pages/Commics/Commics.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <div className={styles.content}>
      <div className={styles.content__block}>
        <Commics/>
      </div>
     </div>
    </>
  )
}

export default App
