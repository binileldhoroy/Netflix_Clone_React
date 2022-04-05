import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/navBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import { action,comedy,originals, romance } from './urls';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Netflix Originals' url={originals}/>
      <RowPost title='Action' isSmall url={action} />
      <RowPost title='Comedy' url={comedy} />
      <RowPost title='Romance Movies' isSmall url={romance} />
    </div>
  );
}

export default App;
