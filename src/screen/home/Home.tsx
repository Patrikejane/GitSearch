import SearchBar from "../../components/SearchBar";
import Header from "../../components/Header";
import CustomTable from "../../components/CustomTable";
import { useEffect, useState } from "react";

const BASE_URL = "https://api.github.com"

const Home = () => {
  const [repositories, setRepositories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);


  const getRepositories = async (searchText: string) => {
    try {
      const response = await fetch(
        `${BASE_URL}/search/repositories?q=${searchText}&per_page=10&page=${page}`
      );
      const data = await response.json();
      console.log("result count",data.total_count);
      setTotalPages(Math.ceil(data.total_count/10));
      setRepositories(data.items);
    } catch (error) {}
  };

  const onChangeText = (text: string) => {
    // console.log('text ', text)
    getRepositories(text)
  }

  return (
    <>
      <Header text={"GitSearch"} />
      <SearchBar onChangeText={onChangeText} />
      <CustomTable data={repositories} pages={totalPages}/>
    </>
  );
};

export default Home;
