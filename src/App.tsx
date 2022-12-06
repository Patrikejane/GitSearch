import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

const App = () => {

  return (
    <div className="App">
        <Header />
        <SearchBar></SearchBar>
    </div>
  );
}

export default App;
