import React,{useState} from 'react'
import Del from './trash-9-64.png';
import Minisafe from './icon_safes.png'
import Pen from './pencil-64.png'



export const Productlistitem = ({ item, deleteProductProp,editupdateProp}) => {

  const editupdate = _ => editupdateProp(item);
  const deleteProduct = _ => deleteProductProp(item)

  return <div className='display-item'>
    <div className='item-left'>
      <div><img src={Minisafe}></img></div>
      <div>{item.Safe}</div>
      {/* <div>{item.Update}</div> */}
    </div>
    <div className='button-ed'>
      <div><button type='button' className='edit' value='updatedText' onClick={()=>editupdate(item)}><img src={Pen}></img></button></div>
      
      <div><button type='button' className='del' value="Delete" onClick={deleteProduct}><img src={Del}></img></button></div>
    </div>
  </div>

};
