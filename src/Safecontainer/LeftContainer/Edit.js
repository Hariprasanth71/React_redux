import React, { useState, useEffect } from 'react';
import Pen from './pen.png';
import Popupfirst from 'reactjs-popup';
import { useDispatch, useSelector } from 'react-redux';
import { editSafe } from '../features/Reducer';

function Edit_tr(props) {
    const [id, setId] = useState(" ");
    const [Safe, setSafe] = useState(" ");
    const [Owner, setOwner] = useState(" ");
    const [Description, setDescription] = useState(" ");
    const [Type, setType] = useState("");
    const dispatch = useDispatch();
    const [secretbox,setsecretbox]=useState();
    // const userList = useSelector((state) => state.users.value);

    useEffect(() => {
        setsecretbox(props.user.secretbox);
        setId(props.user.id);
        setSafe(props.user.Safe);
        setOwner(props.user.Owner);
        setType(props.user.Type);
        setDescription(props.user.Description);
    }, []);
 console.log(Safe);
    return (
        <div >
            <Popupfirst trigger={
                // <div >
                <img src={Pen} />
            } position="top center"
                modal
            >
                {closing => (
                    <div className='pop'>
                        <div className='inside_create_pop'>
                            <div><h1>Create Safe</h1></div>
                            <br></br>
                            <div><p className='para'>A Safe is a logical unit to store the secrets.
                                All the safes are created within Vault. You can control
                                access only at the safe level. As a vault administrator you
                                can manage safes but cannot view the content of the safe.</p>
                                <br></br>
                            </div>

                            <div className='input-box'>
                                <div><p className='Search-top'>Safe Name</p>
                                    <input className='inside-box'
                                        id="safeNameInput"
                                        type='text'
                                        maxlength = "15" 
                                        name="setSafe"
                                        value={Safe}
                                        placeholder='Search'
                                        onChange={(e) => { setSafe(e.target.value) }}
                                    /></div><br></br>

                                <div><p className='Search-top'>Owner</p>
                                    <input className='inside-box'
                                        id="ownerInput"
                                        name="Owner"
                                        maxlength = "15" 
                                        type='text'
                                        value={Owner}
                                        placeholder='Search'
                                        onChange={(e) => { setOwner(e.target.value) }}
                                    /></div><br></br>

                                <div><p className='Search-top'>Type</p>
                                    <select className='inside-box' id="typeInput"
                                        onChange={(e) => { setType(e.target.value) }}>
                                        <option value="personal">Personal</option>
                                        <option value="other">Other</option>
                                    </select></div><br></br>

                                <div><p className='Search-top'>Description</p>
                                    <textarea placeholder='Description'
                                        rows="2" className='inside-box_descrip'
                                        value={Description}
                                        id="descInput"
                                        name="Description"
                                        onChange={(event) => { setDescription(event.target.value) }} /></div>

                                <div className='para-alert'>Please add a minimum of 10 characters</div>
                                </div>
                                <div className='buttontocreate'>
                                    <button type='button' className='buttoncancel' onClick={() => { closing(); }}>Cancel</button>
                                    <button type='button' className='buttoncreate1' onClick={() => {
                                        dispatch(editSafe(
                                            // id: (new Date).getTime(),
                                            {
                                                id: id,
                                                Safe: Safe,
                                                Owner: Owner,
                                                Type: Type,
                                                secretbox:secretbox,
                                                Description: Description,
                                            }

                                        ));
                                        console.log(Safe);
                                        closing();
                                        // setId(props.id);
                                        // setSafe(props.Safe);
                                        // setOwner(props.Owner);
                                        // setType(props.Type);
                                        // setDescription(props.Description);
                                       
                                    }}
                                    disabled={false}>Update
                                    </button>

                                    {/* {
                                        (Description.length >= 10) && <button type='button' className='buttoncreate1' onClick={() => {
                                            dispatch(editSafe({
                                                // id: (new Date).getTime(),
                                                id: id,
                                                Safe: Safe,
                                                Owner: Owner,
                                                Type: Type,
                                                Description: Description,
                                            }))
                                           
                                            close();
                                        }}
                                            disabled={false}>+Create
                                        </button>
                                    }
                                    {
                                        (Description.length <= 9) && <button type='button' className='buttoncreate2' onClick={() => {
                                            dispatch(editSafe({
                                                id: id,
                                                Safe: Safe,
                                                Owner: Owner,
                                                Type: Type,
                                                Description: Description,
                                            }))
                                           
                                            close();
                                        }}
                                            disabled={true}>+Create
                                        </button>
                                    } */}
                                </div>
                           

                        </div>
                    </div>
                )}

            </Popupfirst>

        </div>
    );
}

export default Edit_tr;