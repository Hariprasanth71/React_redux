// import Data from './Data.json';
// // import {DebounceInput} from 'react-debounce-input';
// import React, { useCallback, useState } from 'react';
// import './App.css';

// export default function Input() {
//     const [Search, SetSearch] = useState("");
//     const hgc = (texting) => {
//         return (
//             texting.replace(new RegExp(Search, "ig"), (match) =>
//                 match.fontcolor("red")
//             ));
//     }
//     const debounce = (func) => {
//         let timer;
//         return function (...args) {
//             console.log(args);
//             const context = this;
//             console.log(context);
//             if (timer) clearTimeout(timer);
//             timer = setTimeout(() => {
//                 func.apply(context, args);
//                 // console.log(context);
//             }, 1000);
//         }
//     }
//     const handlesumbit = (event) => {
//         optimizedFn(event.target.value);
//     }

//     const optimizedFn = useCallback(debounce(SetSearch), []);
//     return (
//         <div className='App'>
//             {/* <DebounceInput
//           minLength={2}
//           debounceTimeout={500} */}
//             <input
//                 type="text"
//                 placeholder='Search by Company name......'
//                 className='search-box'
//                 onChange={handlesumbit}
//             />
//             <div className='dup-data'>
//                 <div className='cont'>
//                     {Data.filter((val) => {
//                         if (val.name.toLocaleLowerCase().includes(Search.toLowerCase())) {
//                             const la = val
//                             return la
//                         }
//                     }).map((valu, key) => {
//                         console.log(key);
//                         return (
//                             <div className='com-name' key={key}>
//                                 <p dangerouslySetInnerHTML={{ __html: hgc(valu.name) }} />
//                             </div>
//                         );
//                     })}</div></div>
//         </div>
//     )
// }