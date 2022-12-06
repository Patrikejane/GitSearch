import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import CustomTable from "./components/CustomTable";
import Pagination from "./components/Pagination";

const App = () => {
    const [searchText, setSearchText] = useState("");
    // console.log(searchText);

  return (
    <div className="App">
        <Header text={"SearchGitAPI"} />
        <SearchBar onChangeText={setSearchText}></SearchBar>
        <CustomTable text={searchText}></CustomTable>
    </div>
  );
}

export default App;
