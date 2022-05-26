import './index.css';

import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import {Count} from "./components/Pages/Count";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/Count" element={<Count></Count>}/>
      </Routes>
    </div>
    
        
  );
}

export default App;
