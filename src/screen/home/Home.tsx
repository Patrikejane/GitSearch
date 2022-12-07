import SearchBar from "../../components/SearchBar";
import Header from "../../components/Header";
import CustomTable from "../../components/CustomTable";
import {useCallback, useEffect, useState} from "react";
// import {throttle} from "../../utils";
import {throttle}  from "lodash";

const BASE_URL = "https://api.github.com"

const Home = () => {
  const [repositories, setRepositories] = useState([]);
  const [text, setText] = useState("react");
  const [totalPages, setTotalPages] = useState(10);
  // const [shouldWait,setShouldWait] = useState<boolean>(false);

  const getRepositories:any = async (searchText: string,currentPage:number = 1) => {
    try {
      const response = await fetch(
        `${BASE_URL}/search/repositories?q=${searchText}&per_page=10&page=${currentPage}`
      );
      const data = await response.json();
      console.log("search text :",searchText,"result count",data.total_count);
      setTotalPages(Math.ceil(data.total_count/10));
      setRepositories(data.items);
    } catch (error) {}
  };

  const onChangeText = (text: string) => {
    setText(text);
    throttledAttempts();

  }

  const throttledAttempts =  throttle(() =>{getRepositories(text)}, 5000);

  return (
    <>
      <Header text={"GitSearch"} />
      <SearchBar onChangeText={onChangeText} />
      <CustomTable data={repositories} pages={totalPages} onChange={(currentPage) => { getRepositories(text,currentPage)}}/>
    </>
  );
};

export default Home;
