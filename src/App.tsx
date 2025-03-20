import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
