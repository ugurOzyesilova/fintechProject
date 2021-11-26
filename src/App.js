import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Content from "./components/Content"
import Nav from "./components/Nav"
import React, {useState, useEffect} from 'react';
import axios from "axios";

const App = () =>  {


    const [allData, setAllData] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios("https://restcountries.com/v2/all");
            setAllData(data);
        }
        fetchData()
    }, []);
    
    // console.log(allData); consele log all the Datas

  return (
    <div className="App">
     <Nav/>
     <Content
       data = {allData} //I am passing all data stored in endpoint.
       setData = {setAllData}
     />
    </div>
  );
}

export default App;
