import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css'
import {
  Home, SeeAll, Create
} from './pages'
import {
  MenuM, MenuD, Footer
} from './components'
import './App.css'
import { Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
    <div>
      <MenuM visible={window.innerWidth>=800 ? "hidden" : "visible"}></MenuM>
      <MenuD visible={window.innerWidth>=800 ? "visible" : "hidden"}></MenuD>
      <BrowserRouter>
        <Route exact path='/' component={ Home }></Route>
        <Route path='/seeall' component={ SeeAll }></Route>
        <Route path='/create' component={ Create }></Route>
        {/* <Route path='/' component={  }></Route> */}
      </BrowserRouter>
      <Footer></Footer>
    </div>
  )
}


export default App