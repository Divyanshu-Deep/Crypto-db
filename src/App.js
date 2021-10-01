import React from 'react'
import Navbar from './Component/Navbar';
import Homepage from './Component/Homepage';
import News from "./Component/News";
import Exchanges from './Component/Exchanges';
import CryptoCurrencies from './Component/CryptoCurrencies';
import CryptoDetails from './Component/CryptoDetails';
import {Switch, Route} from "react-router-dom"
import { Layout } from "antd";
import "./App.css"
const App = () => {
  return (
    <div className="app">
      <div className="navbar"> 
      <Navbar/>
      </div>

      <div className="main">
        <Layout>
            <div className="routes">
                <Switch>
                  <Route exact path="/">
                    <Homepage/>
                  </Route>
                  <Route exact path="/exchanges">
                    <Exchanges />
                  </Route>
                  <Route exact path="/cryptocurrencies">
                    <CryptoCurrencies />
                  </Route>
                  <Route exact path="/crypto/:coinId">
                    <CryptoDetails />
                  </Route>
                  <Route exact path="/news">
                    <News />
                  </Route>
                </Switch>
            </div>
        </Layout>
      </div>
    </div>
  )
}

export default App
