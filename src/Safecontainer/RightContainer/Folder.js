import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import Folder1 from './folder-plus 1.png';
import { useSelector, useDispatch } from 'react-redux';
import { addUser2, setcurrentid } from '../features/Reducer';

export default function Folder(props) {
    const [secretbox, setsecretbox] = useState([]);
    const dispatch = useDispatch();
    const userList1 = useSelector((state) => state.users.value);

    return (<div className='Ri_header_right'>
        <div>Add Folder</div>
        <Popup trigger={<img className='Folder' src={Folder1} />} position="top center"
            modal>
            {close => (
                <div className='Folder-popup'>
                    <div className='Folder-sub1'>
                        Add Folder
                    </div>
                    <div className='Folder-sub2'>
                        <div>Folder Name</div>
                        <div><input type='text' placeholder='Folder Name' maxlength="15" className='inside-box_ri' onChange={(event) => {
                            setsecretbox(event.target.value);
                            event.preventDefault()
                        }}
                        ></input></div>

                        <div><p>Please enter lowercase alphabets, numbers and underscores only.</p></div>
                    </div>
                    <div className='Folder-sub3'>
                        <button type='sumbit' className='buttoncancel_fol' onClick={() => { close(); }}>Cancel</button>
                        {
                            <button type='submit' className='buttoncreate_fol'
                                onClick={() => {
                                    dispatch(addUser2({
                                        currentid: props.currentid,
                                        secretbox: secretbox,
                                        // id:id,
                                    }))
                                    console.log(secretbox);
                                    close();
                                    setsecretbox(' ');
                                    // close();
                                }} >Save</button>
                        }
                    </div>
                </div>
            )
            }
        </Popup >
    </div >
    )
}
