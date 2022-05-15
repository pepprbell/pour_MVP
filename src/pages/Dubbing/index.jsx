import styles from './index.module.css'
import {
    Navbar,
} from '../../components'
import { Game, TVAnime, Theater } from '../'

function Dubbings() {
    const sub = [['게임','game',true],['TV 애니메이션','tva',false],['극장 애니메이션','theater',false]]

    const WhichOne = () => {
      const hash = window.location.hash
      if (hash === '#game') {
        return (
          <>
            <Game></Game>
          </>
        )
      }
      // if (hash === '#') {
      //   return (
      //     <>
      //     </>
      //   )
      // }
      return (
        <>
          <Game></Game>
        </>
      )
    }
    
    return(
      <div>
        <Navbar sub={sub}></Navbar>
        <WhichOne></WhichOne>
      </div>
    )
}

export default Dubbings