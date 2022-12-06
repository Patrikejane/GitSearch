import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import CustomTable from "./components/CustomTable";

const App = () => {

  return (
    <div className="App">
        <Header />
        <SearchBar></SearchBar>
        <CustomTable></CustomTable>
    </div>
  );
}

export default App;
