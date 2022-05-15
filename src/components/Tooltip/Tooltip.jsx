import { useRef } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import styles from './Tooltip.module.css'

function Tooltips(props) {
  const ref = useRef()
  
  const click = () => {
    console.log(ref)
  }
  return(
    <div onClick={click}>
      <OverlayTrigger placement={props.where} overlay={
        <Tooltip ref={ref}>{props.message}</Tooltip>
      }>
        {props.children}
      </OverlayTrigger>
    </div>
  )
}

export default Tooltips