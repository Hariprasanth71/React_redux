import React, { useState } from 'react'
import moment from 'moment'
import Searchicon from './icon_search.png'
import EmptyCon1 from './Group 12687.png';
import Create from './LeftContainer/Create';
import Folder2 from './icon_folder.png';
import Grey from './Grey Folder.png';
import Folder from './RightContainer/Folder';
import Banner from './Banner_img.png';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, setcurrentid, remove, } from './features/Reducer';
import MiniFolder from './icon_safes.png';
import Del from './del.png';
import EmptyCon2 from './img_secrets.png';
import Edit from './LeftContainer/Edit';
import FolderCenter from './RightContainer/FolderCenter';

function Container() {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value);
    const userList1 = useSelector((state) => state.users.value);
    const currentid = useSelector((state) => state.users.currentid);
    const secretbottom = useSelector((state) => state.users.value);
    const [Search, SetSearch] = useState('');

    const handlesumbit = (event) => {
        
        SetSearch(event.target.value);
    }
    function stop(e) {
        e.stopPropagation();
    }


    // const currentId = useSelector((state) => state.users.currentid);
    const safeList = useSelector((state) => state.users.value);

    return (
        <div className='Main-container'>
            <div className='left-container'>
                <div className='left-top'>
                    <div className='all'>
                        <div>All Safe</div>
                       
                        <span className='count'>({
                            userList.filter((users) => {
                                if(users.Safe.toLocaleLowerCase().includes(Search.toLowerCase())) {
                                    return users
                                }
                            }).length
                        })</span>
                    </div>
                    <div className='Search-box'>
                        <img src={Searchicon} alt='' />
                        <input type='text' placeholder='Search' value={Search} onChange={handlesumbit} />

                    </div>
                </div>
               {/* {(Search!==lew)&& <p>sdffdfsdf</p>} */}
                <div className='left-bottom'>
                    {(userList.length <= 0) && <div className='Emptycon1'>

                        <img src={EmptyCon1} alt=''></img>
                        <p className='left-text'>Create a Safe and get started!</p>
                    </div>}
                    {
                        (userList.length <= 0) && <div className='plus-center'><Create /></div>
                    }

                    {
                        (userList.length > 0) && <div className='plus-bottom'><Create /></div>
                    }
                        {
                            userList.filter((users) => {
                                if(users.Safe.toLocaleLowerCase().includes(Search.toLowerCase())) {
                                    return users
                                }
                            }).length===0 && userList.length>0 && <p>No data found</p>
                        }
                    {
                        userList.filter((users) => {
                            if(users.Safe.toLocaleLowerCase().includes(Search.toLowerCase())) {
                                return users
                            }
                            
                        }).map((user) => {
                            return <div className={user.id === currentid.id ? "display-item" : "Noactive_item"} key={user.id}
                                onClick={() => {
                                    dispatch(
                                        setcurrentid({
                                            id: user.id,
                                        })
                                    )
                                }}>
                                <div className='item-left'>
                                    <div className='mini_fol'><img src={MiniFolder} alt=''></img></div>
                                    <div className='dis'>
                                        <p>{user.Safe}</p>

                                        <span id="lastUpdated">Last Updated: {moment().startOf('minute').fromNow()}
                                        </span>
                                    </div>

                                </div>
                                <div className='button-ed' >
                                    <button type='button' className='edit' ><Edit user={user} /></button>
                                    <div><button type='button' className='del' onClick={(e) => {
                                        stop(e);
                                        dispatch
                                            (deleteUser(
                                                { id: user.id }
                                            ))
                                    }}><img src={Del} alt=''></img></button></div>
                                </div>

                            </div>

                        })
                    }

                </div>

            </div>

            <div className='Right-container'>
                <div className='Right-top'>
                    <img src={Banner} alt='' />
                    {safeList.map((value) => {
                        return value.id === currentid.id ? (
                            <div key={value.id} className="right_banner">
                                <h1>{value.Safe}</h1>
                                <div id="Bannername_2">{value.Description}</div>
                            </div>
                        ) : (
                            ""
                        );
                    })}

                    {safeList.length === 0 ? (
                        <div className="right_banner" >
                            <h1>No Safes Created Yet</h1>
                            <span id="Bannername_2">
                                Create a Safe to see your secrets, folders and permissions here
                            </span>
                        </div>
                    ) : (
                        ""
                    )}

                </div>
                <div className='Right-bottom' >
                    <div className='Right-header'>
                        <div className='Ri_header_left'>
                            <div>Secrets</div>
                            {/* <div>Permissions</div> */}
                        </div>
                        {
                            (userList.length > 0) && <Folder currentid={currentid.id} />
                        }
                        {
                            (userList.length === 0) && <div className='Grey-Folder'><p>Add Folder</p><div><img src={Grey}></img></div></div>
                        }
                    </div>
                    <div className='Bottom_folder'>
                        {secretbottom.map((value) => {
                            return (
                                (value.id === currentid.id && value.secretbox.length >= 0 && (
                                    <span className='secret'>{value.secretbox.length} Secrets</span>
                                ))
                            );
                        })}

                        <div>
                            {secretbottom.map((value) => {
                                return value.id === currentid.id ? (
                                    <div key={value.id}>
                                        {value.secretbox.map((x, index) => {
                                            return (
                                                <div key={index} className="display-item_fol">
                                                    <div className="item-left">
                                                        <div className="folderIcon">
                                                            <img className="folder" src={Folder2} alt="" />
                                                        </div>
                                                        <div className="FolderDetails">
                                                            <span>{x}</span>
                                                            <span id="lastUpdated">Last Updated:{moment().startOf('minute').fromNow()}    </span>
                                                        </div>
                                                    </div>
                                                    <div className="remove" >
                                                        <button type='button' className='del' onClick={() =>
                                                            dispatch(
                                                                remove({
                                                                    id: x,
                                                                })
                                                            )
                                                        }><img src={Del} alt=''></img></button>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    ""
                                );
                            })}
                        </div>
                        {secretbottom.map((value) => {
                            return (
                                (value.id === currentid.id && value.secretbox.length === 0 && (
                                    <div className='Emptycontainer2'>
                                        <div><img src={EmptyCon2} alt=''></img></div>
                                        <p>Add a Folder and then you’ll be able to add Secrets to view them all here</p>
                                        <div><FolderCenter currentid={currentid.id} /></div>
                                    </div>
                                ))
                            );
                        })}


                        {(userList1.length === 0) && (<div className='Emptycontainer2'>
                            <div><img src={EmptyCon2} alt=''></img></div>
                            <p>Add a Folder and then you’ll be able to add Secrets to view them all here</p>
                            {/* <div><FolderCenter currentid={currentid.id} /></div> */}

                            <button type='button' className='Grey-Add'>+Add</button>
                        </div>)}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container
