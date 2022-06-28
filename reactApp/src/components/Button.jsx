import React from 'react'

const Button = ({name,id,changeQty}) => {
    // console.log(item)
    // const handleClick= (name)=>{
    //     if(name=="+"){
    //         changeQty(id,+1)
    //     }else{
    //         changeQty(id,+1)
    //     }

    // }
  return (
    
    <button onClick={()=> ( name=="+" ? ()=>changeQty(id,+1) : ()=>changeQty(id,-1))}>{name}</button>
  )
}

export default Button