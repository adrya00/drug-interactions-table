import axios from "axios";
import "./App.css";
import React, { useState, useEffect } from "react";
import whileLoading from './components/whileLoading';
import drugInteractionTable from './components/drugInteractionTable';

function App() {
  const TableLoading = whileLoading(drugInteractionTable);
  const [drugData, setDrugData] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {    
    setDrugData({ loading:true});
    const apiUrl = "https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=1092422";
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setDrugData({loading: false, repos: allRepos});
    });  
  }, [setDrugData]); 

  return(
    <div className="App">
      <div className="container">
        <h2>Drug Interactions</h2>
      </div>
      <div className='repo-container'>
        <TableLoading isLoading = {drugData.loading} repos={drugData.repos}/>
      </div>
    </div>

  );
}

export default App;