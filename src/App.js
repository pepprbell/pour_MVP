import { BrowserRouter } from 'react-router-dom';
import {
  Home, SeeAll, Create, Audiobook, Ad
} from './pages'
import {
  MenuM, MenuD, Footer,
} from './components'
import './App.css'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MenuD></MenuD>
        <MenuM></MenuM>
        <Route exact path='/' component={ Home }></Route>
        {/* <Route path='/seeall' component={ SeeAll }></Route> */}
        <Route path='/create' component={ Create }></Route>
        <Route path='/ad' component={ Ad }></Route>
        <Route path='/audiobook' component={ Audiobook }></Route>
        {/* <Route path='/' component={  }></Route> */}
      </BrowserRouter>
      <Footer></Footer>
    </div>
  )
}


export default App