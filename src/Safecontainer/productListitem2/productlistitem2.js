import React,{useState} from 'react'
import Pen2 from './pencil-64.png'
import Del2 from './trash-9-64.png';
import MiniFolder from './icon_folder_active.png'

export const Productlistitem2 = ({ item2, deleteProductProp2}) => {

//   const editupdate2 = _ => editupdateProp2(item);
  const deleteProduct2 = _ => deleteProductProp2(item2)

  return <div className='display-item'>
    <div className='item-left'>
      <div className='mini_fol'><img src={MiniFolder}></img></div>
      <div>{item2.Foldertext}</div>
    </div>
    <div className='button-ed'>
      <div><button type='button' className='edit' ><img src={Pen2}></img></button></div>
      {/* onClick={()=>editupdate2(item2)} */}
      <div><button type='button' className='del' onClick={deleteProduct2}><img src={Del2}></img></button></div>
    </div>
  </div>

};
