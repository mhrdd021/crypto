import './App.css';
import Coin from '../src/crypto-table/Coin'
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
import CoinInfo from '../src/crypto-info/CoinInfo'

function App() {
    //change tabBar name
    useEffect(() => {
      window.scrollTo(0, 0);
      ReactGA.initialize("UA-237395014-1");
      ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);


  return(
    <React.Fragment>
    <div className="body-wrap z-50 overflow-x-hidden">

      {/*------------------------------Routes----------------------------- */}
      <div>
        
        <Routes>
          <Route path='/' element={<Coin />} />
          {/*-------------Coin-------------- */}
          <Route path="/Coin/:id" element={<CoinInfo />} />
        </Routes>
      </div>

    </div>
  </React.Fragment>
  )
}

export default App;
