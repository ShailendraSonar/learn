
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Pdetails from './Components/landingPge/assets/datapaasing/Pdetails';
import { useEffect, useState } from 'react';
import Final from './Components/landingPge/assets/datapaasing/Final';
// import Home from './pages/Home'
// import Page1 from './Components/Page1'
// import Page2 from './Components/Page2'
// import Sidebar from './pages/Sidebar';
import { BrowserRouter , Router, Route, Routes,Link } from "react-router-dom";
// import LandingPage from './Components/landingPge/LandingPage';
// import Use from './Components/useState/Use'
// import Retrive from './Components/useState/Retrive'
// import AxUse from './Components/useState/AxUse'
// import Firestor from './Components/UseFire/Firestor'
// import Mainn from './Components/StoreAndRetrive/Mainn'
// let tabs = ["page1", "page2", "page3"];



function App() {

  const [data, setData] = useState({});
  return (
    <>
      {/* <Pdetails data={data} setData={setData}/> */}
      {/* <Final data={data} setData={setData}/> */}


      <BrowserRouter>
          <ul>
          <li>
            <Link className="home_li" to="page_1">Tempelate</Link>
          </li>
          <li>
            <Link className="home_li" to="page_2">Tempelate</Link>
          </li>
          </ul>
      
      <Routes>
        <Route  index exact  path="/page_1" element={<Pdetails data={data} setData={setData}/>} />
        <Route exact path="/page_2" element={<Final data={data} setData={setData}/>} />
        {/* <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


