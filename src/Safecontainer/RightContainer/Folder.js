import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import Folder1 from './folder-plus 1.png';
import { useDispatch} from 'react-redux';
import { addUser2 } from '../features/Reducer';

export default function Folder(props) {
    const [secretbox, setsecretbox] = useState([]);
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const handleChange = event => {
        // const result = event.target.value.replace(/[^a-z0-9_]/gi, '');
          const result = event.target.value.replace(/[\W]/gi, '');

        setMessage(result);
    };
    // const userList1 = useSelector((state) => state.users.value);
    // const secretbottom = useSelector((state) => state.users.value);

    return (<div>

        <Popup trigger={<div className='Ri_header_right'><div>Add Folder</div> <div><img className='Folder' src={Folder1} alt='' /></div></div>
        } position="top center"
            modal>
            {close => (
                <div className='Folder-popup'>
                    <div className='Folder-sub1'>
                        Add Folder
                    </div>
                    <div className='Folder-sub2'>
                        <div>Folder Name</div>
                        <div><input type='text' placeholder='Folder Name' maxlength="15" value={message} className='inside-box_ri' onChange={(event) => {
                            handleChange(event);
                            setsecretbox(event.target.value);

                            event.preventDefault()
                        }}
                        ></input></div>

                        <div><p>Please enter alphabets, numbers and underscores only.</p></div>
                    </div>
                    <div className='Folder-sub3'>
                        <button type='sumbit' className='buttoncancel_fol' onClick={() => { close(); }}>Cancel</button>
                        {
                            (secretbox.length >= 4) && <button type='submit' className='buttoncreate_fol'
                                onClick={() => {
                                    dispatch(addUser2({
                                        currentid: props.currentid,
                                        secretbox: secretbox,
                                        message:message,
                                        
                                    }))
                                    // console.log(secretbox);
                                    close();
                                    setsecretbox('');
                                    setMessage('');
                                    // close();
                                }} disabled={false}>Save</button>
                        }
                        {
                            (secretbox.length <= 3) && <button type='submit' className='buttoncreate_fol_disable'
                                onClick={() => {
                                    dispatch(addUser2({
                                        currentid: props.currentid,
                                        secretbox: secretbox,
                                        message:message,
                                    }))
                                    // console.log(secretbox);
                                    close();
                                    setsecretbox(' ');
                                    setMessage('');
                                    // close();
                                }} disabled={true}>Save</button>
                        }
                    </div>
                </div>
            )
            }
        </Popup >
    </div >
    )
}
