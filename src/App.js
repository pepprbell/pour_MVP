import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css'
import {
  Home, SeeAll, Create
} from './pages'
import {
  Menu, Footer
} from './components'
import './App.css'
import { Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Menu></Menu>
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