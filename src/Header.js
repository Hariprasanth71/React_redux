import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Vault from './Components/Vault';
import Service from './Components/Service';
import Azure from './Components/Azure';
import Iam from './Components/iam';
import Docuicon from './document-128.png';
import Conticon from './contacts-128.png';
import Container from './Safecontainer/TotalContaine';

function Header() {
  return (
    <Router>
        <div className='header'>
          <div className='T-vault'>T-VAULT</div>
          <div className='navbar'>
            <ul>
              <li><NavLink to='' className='safe active'>Safe</NavLink></li>
              <li><NavLink to='/Vault/Vault'><p>Vault AppRoles</p></NavLink></li>
              <li><NavLink to='/Service'>Service Accounts</NavLink></li>
              <li><NavLink to='/IAM'>IAM Service Accounts</NavLink></li>
              <li><NavLink to='/Azure'>Azure Active Directory</NavLink></li>
            </ul>
          </div>
          <div className='User'>
            <img src={Docuicon} alt='' />
            <div>Documentation</div>
            <img src={Conticon} alt=''/>
            <div>(Admin) Davis R.</div>
          </div>
        </div>
        <Routes>
          <Route exact path='/' element={<Container/>}/>
          <Route path="/Vault/:id" element={<Vault />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/IAM' element={<Iam />} />
          <Route path='/Azure' element={<Azure />} />
        </Routes>
    </Router>
  );
}
export default Header;