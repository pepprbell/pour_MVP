import { useEffect, useState, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css'
import {
  Home, SeeAll, Create
} from './pages'
import './App.css'
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.content}>
      <BrowserRouter>
        <Route exact path='/' component={ Home }></Route>
        <Route path='/seeall' component={ SeeAll }></Route>
        <Route path='/create' component={ Create }></Route>
        {/* <Route path='/' component={  }></Route> */}
      </BrowserRouter>
      </div>
    </div>
  )
}


export default App