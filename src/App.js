import './index.css';

import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import {Count} from "./components/Pages/Count";
import {Search} from "./components/Pages/Search";
import {Tenor} from "./components/Pages/Tenor";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/Count" element={<Count></Count>}/>
        <Route path="/Search" element={<Search></Search>}/>
        <Route path="/Tenor" element={<Tenor></Tenor>}/>
      </Routes>
    </div>
    
        
  );
}

export default App;
