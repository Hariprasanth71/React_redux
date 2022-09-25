import React, { useState } from 'react'
import Createbutt from './Group 12577.png';
import Popup from 'reactjs-popup';
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, setcurrentid } from '../features/Reducer';

export default function Create() {

  const uid = uuid();
  const id = uid.slice(0, 9);
  const [Safe, setSafe] = useState('');
  const [Owner, setOwner] = useState('');
  const [Description, setDescription] = useState('');
  const [Type, setType] = useState('');
  const [secretbox] = useState([]);
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  return (
    <div >
      <Popup trigger={
        <div >
          <img className='Cr_butt' src={Createbutt} alt='' />
        </div>} position="top center"
        modal
      >
        {close => (
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

              <div className='input-box' >

                <div><p className='Search-top'>Safe Name</p>

                  <input className='inside-box'
                    id="safeNameInput"
                    type='text'
                    maxlength="25"
                    name="setSafe"
                    value={Safe}
                    placeholder='Search'
                    onChange={(event) => { setSafe(event.target.value); }}
                  />
                </div><br></br>
                
                <div><p className='Search-top'>Owner</p>
                  <input className='inside-box'
                    id="ownerInput"
                    name="Owner"
                    type='text'
                    maxlength="25"
                    value={Owner}

                    placeholder='Owner'
                    onChange={(event) => { setOwner(event.target.value); }}
                  /></div><br></br>

                <div><p className='Search-top'>Type</p>
                  <select className='inside-box' id="typeInput"
                    onChange={(event) => { setType(event.target.value); }}>
                    <option value="Personal">Personal</option>
                    <option value="Other">Other</option>
                  </select></div><br></br>

                <div><p className='Search-top'>Description</p>
                  <textarea placeholder='Description'
                    rows="2" className='inside-box_descrip'
                    id="descInput"
                    name="Description"
                    value={Description}

                    onChange={(event) => { setDescription(event.target.value); }} />

                  <div className='para-alert'>Please add a minimum of 10 characters</div>
                </div>

                <div className='buttontocreate'>
                  <button className='buttoncancel' onClick={() => { close(); }}>Cancel</button>

                  {
                    (Description.length >= 10) && <button type='button' className='buttoncreate1' onClick={() => {
                      dispatch(addUser({
                        id: id,
                        Safe: Safe,
                        Owner: Owner,
                        Type: Type,
                        Description: Description,
                        secretbox: secretbox,
                      })
                      );
                      dispatch(
                        setcurrentid({
                          id: id,
                        })
                      );
                      setSafe('');
                      setOwner('');
                      setType('');
                      setDescription('');
                      close();
                    }}
                      disabled={false}>+Create
                    </button>
                  }
                  {
                    (Description.length <= 9) && <button type='button' className='buttoncreate2' onClick={() => {
                      dispatch(addUser({
                        id: id,
                        Safe: Safe,
                        Owner: Owner,
                        Type: Type,
                        Description: Description,
                        secretbox: secretbox,
                      })
                      );
                      dispatch(
                        setcurrentid({
                          id: id,
                        })
                      );
                      setSafe('');
                      setOwner('');
                      setType('');
                      setDescription('');
                      close();
                    }}
                      disabled={true}>+Create
                    </button>
                  }
                </div>
              </div>

            </div>
          </div>
        )}

      </Popup>

    </div>
  )




}
