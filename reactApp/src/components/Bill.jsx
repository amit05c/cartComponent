import React, { useState } from 'react'
import AddItems from './AddItems'
import ItemList from './ItemList'
import Total from './Total'

const initData= [
    {id:1, food:"Biriyani", rate:200,qty:2},
    {id:2, food:"Chips", rate:20,qty:1},
    {id:3, food:"Coldrinks", rate:50,qty:1},
]


// const total = (data)=>{
//         data.reduce((acc,elem)=>{
//             return ( acc+ (elem.qty)*elem.rate)
//         },0)
//     }
const Bill = () => {
    const [data,setData] = useState(initData)

    // const addData = (newData)=>{
    //          setData([
    //             ...data,{

    //             }
    //          ])
    // }

    const changeQty = (id,amount)=>{
        // make it later
      setData(  data.map(elem=>{
            return  elem.id==id ? {...elem, qty:elem.qty+amount} : elem
        }))
    }

    const total = ()=>{
      return  data.reduce((acc,elem)=>{
            return  acc+ (elem.qty)*elem.rate
        },0)
    }
    // let x= total()
    // console.log(x)
  return (
    <div>Bill
        {/* <AddItems/> */}
        {data.map(item=>(
            <ItemList key={item.id} item={item} changeQty={changeQty} />

        ))}
        <Total total={total()}/>
    </div>
  )
}

export default Bill