import { useEffect, useState } from "react";
import Launches from "./components/Launches";
import Pagination from "./components/Pagination";
import Select from "./components/Select";
import GlobalStyle from "./GlobalStyle";
import { getAllLaunches } from "./service";


function App() {
  const [launches, setLaunches] = useState([])
  const [displayed, setDisplayed] = useState('All')
  const [onPage,setOnPage] = useState([])

  
  useEffect(() => {
    getAllLaunches().then(res => {
      setLaunches(res.data)
      setOnPage(res.data)
    })
  },[])

  useEffect(()=>{
    setOnPage(launches.slice(0, displayed === 'All' ? Infinity : displayed)) 
  },[displayed,launches])

  return (
    <GlobalStyle>
      <Select options={['All', 10, 20, 30]} setDisplayed={setDisplayed} displayed={displayed}/>
      <Pagination launches={launches} displayed={displayed} setOnPage={setOnPage}/>
      <Launches launches={onPage} />
    </GlobalStyle>
  );
}

export default App;
