import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/NavBar.module.css';
import styles from './App.module.css';

import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';




function App() {

  return (
    <div className={styles.App}>

    <NavBar />
    <Header />
   </div>

  );

}

export default App;
