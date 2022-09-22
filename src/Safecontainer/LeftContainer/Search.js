// import React from 'react'
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// export default function Search() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const userList = useSelector((state) => state.users.value);
//   return (
//     <div>

//     <>
//       <div className="templateContainer">
//         <div className="searchInput_Container">
//           <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
//             setSearchTerm(event.target.value);
//           }} />
//         </div>
//         <div className="template_Container">
//           {
//             userList
//               .filter((val) => {
//                 if(searchTerm == ""){
//                   return val;
//                 }else if(val.Safe.toLowerCase().includes(searchTerm.toLowerCase())){
//                   return val;
//                 }
//               })
//               .map((val) => {
//                 return(
//                   <div className="template" key={val.id}>
//                       {/* <img src={val.ima} alt="" /> */}
//                       <h3>{val.Safe}</h3>
//                       {/* <p className="price">{val.}</p> */}
//                   </div> 
//                 )
//               })
//           }
//         </div>
//       </div>
//     </>
  
//     </div>
//   )
// }
