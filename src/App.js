import { useEffect, useState, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css'
import {
  Home, SeeAll, Create
} from './pages'
import Menu from './components/Menu/Menu'
import './App.css'
import { Route } from 'react-router-dom';

function App() {

  return (
    <div className={styles.App}>
      <Menu></Menu>
      <BrowserRouter>
        <Route exact path='/' component={ Home }></Route>
        <Route path='/seeall' component={ SeeAll }></Route>
        <Route path='/create' component={ Create }></Route>
        {/* <Route path='/' component={  }></Route> */}
      </BrowserRouter>
    </div>
  )
}


export default App