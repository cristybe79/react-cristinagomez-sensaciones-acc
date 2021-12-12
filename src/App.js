// import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './compontes/NavBar/NavBar';
import ItemListConteiner from './compontes/ItemsListConteiner/ItemsListConteiner';


function App() {


  return (
    <div className="App ">
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
        <ItemListConteiner/>
      </main>
    </div>
  );
}

export default App;
