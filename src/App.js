import { BrowserRouter, Route } from 'react-router-dom';
import {
  Home, SeeAll, Create, Audiobook, Ad, Dubbing, Login
} from './pages'
import {
  MenuM, MenuD, Footer,
} from './components'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <MenuD></MenuD>
        <MenuM></MenuM>
        <Route exact path='/' component={ Home }></Route>
        {/* <Route path='/seeall' component={ SeeAll }></Route> */}
        <Route exact path='/create' component={ Create }></Route>
        <Route exact path='/ad' component={ Ad }></Route>
        <Route exact path='/audiobook' component={ Audiobook }></Route>
        <Route path='/dubbing' component={ Dubbing }></Route>
        {/* <Route path='/' component={  }></Route> */}
      </BrowserRouter>
      <Footer></Footer>
    </div>
  )
}


export default App