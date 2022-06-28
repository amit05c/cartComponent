import React from 'react'
import { useState } from 'react'
import Button from './Button'
// import Item from './Item'
import styles from "./itemList.module.css"

const ItemList = ({item , changeQty}) => {
  // const [qty,setQty] = useState(item.qty)
  return (
    <div className={styles.list}>
      <h1>{item.food}</h1>
      <h1>{item.rate}</h1>
      <h1>{item.qty}</h1>

      {/* <Button name={"+"} id={item.id} onClick={changeQty}/>
      {item.qty}
      <Button name={"-"} id={item.id} onClick={changeQty}/> */}
      <div style={{margin:"20px"}}>
      <button disabled={item.qty==0} onClick={()=>changeQty(item.id,-1)}>-</button>
      <div>changeQty</div>
      <button disabled={item.qty==10} onClick={()=>changeQty(item.id,+1)}>+</button>
      </div>
    </div>
  )
}

export default ItemList