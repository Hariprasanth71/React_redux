import React, { useState } from 'react'
import Searchicon from './icon_search.png'
import EmptyCon1 from './Group 12687.png';
import Create from './LeftContainer/Create';
import Folder2 from './icon_folder.png';
import Folder from './RightContainer/Folder';
import Banner from './Banner_img.png';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, setcurrentid, remove } from './features/Reducer';
import MiniFolder from './icon_safes.png';
import Del from './del.png';
import EmptyCon2 from './img_secrets.png';
// import Edit from './LeftContainer/Edit';
import Edit_tr from './LeftContainer/Edit';
import Search from './LeftContainer/Search';

function Container() {
    const dispatch = useDispatch();
    const Allsafelist = useSelector((state) => state.users.value);
    const userList = useSelector((state) => state.users.value);
    const sear= useSelector((state)=>state.users.value);
    const userList1 = useSelector((state) => state.users.value);
    const currentid = useSelector((state) => state.users.currentid);
    const secretbottom = useSelector((state) => state.users.value);
    // const [searchTerm, setSearchTerm] = useState("");
    console.log(secretbottom);
    // const handleSearch = event => {
    //     if (event.target.value) {
    //         const searchText = event.target.value;
    //         const matchedJobs = jobs.filter(job => job.jobTitle
    //         .toLowerCase().includes(searchText.toLowerCase()));
    //         dispatch(handleSearchJobs(matchedJobs));
    //     }
    // }
    // const [Search, SetSearch] = useState('');
    const currentId = useSelector((state) => state.users.currentid);
    const safeList = useSelector((state) => state.users.value);

    return (
        <div className='Main-container'>
            <div className='left-container'>
                <div className='left-top'>
                    <div className='all'>
                        <div>All Safe</div>
                        <span className='count'>({Allsafelist.length})</span>
                    </div>
                    <div className='Search-box'>
                        <img src={Searchicon}/>
                        <input type='text' placeholder='Search' />
                            {/* {
                                sear
                                  .filter((value) => {
                                    if(searchTerm == ""){
                                      return "notfound";
                                    }else if(value.toLowerCase().includes(searchTerm.toLowerCase())){
                                      return userList;
                                    }
                                  })
                                  .map((value) => {
                                    return(
                                      <div className="template" key={value.id}>
                                          <img src={val.ima} alt="" />
                                          <h3>{value.userList}</h3>
                                          <p className="price">{val.}</p>
                                      </div> 
                                    )
                                  })
                              } */}
                        
                        
                    </div>
                </div>
                <div className='left-bottom'>
                    {(userList.length <= 0) && <div className='Emptycon1'>
                        <img src={EmptyCon1}></img>
                    </div>}
                    <Create />
                    {
                        userList.map((user) => {
                            return <div className={user.id === currentid.id ? "display-item" : "Noactive_item"} key={user.id}
                                onClick={() => {
                                    dispatch(
                                        setcurrentid({
                                            id: user.id,
                                        })
                                    )
                                }}>
                                <div className='item-left'>
                                    <div className='mini_fol'><img src={MiniFolder}></img></div>
                                    <div>{user.Safe}</div>

                                </div>
                                <div className='button-ed' >
                                    <button type='button' className='edit' ><Edit_tr user={user}/></button>
                                    <div><button type='button' className='del' onClick={() => { dispatch(deleteUser({ id: user.id })) }}><img src={Del}></img></button></div>
                                </div>
                            </div>
                        })
                    }

                 
                </div>
            </div>
            <div className='Right-container'>
                <div className='Right-top'>
                    <img src={Banner} />
                    {safeList.map((value) => {
                        return value.id === currentId.id ? (
                            <div key={value.id} className="right_banner">
                                <span id="nameInfo">{value.Safe}</span>
                                <span id="descInfo">{value.Description}</span>
                            </div>
                        ) : (
                            ""
                        );
                    })}

                    {safeList.length === 0 ? (
                        <div className="right_banner" >
                            <span id="nameInfo">No Safes Created Yet</span>
                            <span id="descInfo">
                                Create a Safe to see your secrets
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
                            <div>Permissions</div>
                        </div>
                       

                        <Folder currentid={currentid.id} />
                    </div>
                    {/* {currentid.length} */}

                    {/* {secretbottom.map((value, index) => {
                        return (
                            secretbottom.length !== 0 ||
                            (value.id === currentid.id && value.secretbox.length > 0 && (
                                <div key={index}>
                                    <span >{value.secretbox.length} Secrets</span>
                                </div>
                            ))
                        );
                    })} */}
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
                                                        <span id="lastUpdated">Last Updated: a day ago</span>
                                                    </div>
                                                </div>
                                                <div className="remove" >
                                                    <button type='button' className='del' onClick={() =>
                                                        dispatch(
                                                            remove({
                                                                id: x,
                                                            })
                                                        )
                                                    }><img src={Del}></img></button>

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
                    
                    {(userList1.length <= 0) && <div className='Emptycontainer2'>
                        <div><img src={EmptyCon2}></img></div>
                        <p>Add a Folder and then you’ll be able to add Secrets to view them all here</p>
                        <div><button type='button' className='buttoncreate_fol2' >+Add</button></div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Container
