import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
              <li><Link to='/Safe' className='safe'>Safe</Link></li>
              <li><Link to='/Vault/Vault'><p>Vault AppRoles</p></Link></li>
              <li><Link to='/Service'>Service Accounts</Link></li>
              <li><Link to='/IAM'>IAM Service Accounts</Link></li>
              <li><Link to='/Azure'>Azure Active Directory</Link></li>
            </ul>
          </div>
          <div className='User'>
            <img src={Docuicon}/>
            <div>Documentation</div>
            <img src={Conticon}/>
            <div>(Admin) Davis R.</div>
          </div>
        </div>
        <Routes>
          <Route exact path='/Safe' element={<Container/>}/>
          <Route path="/Vault/:id" element={<Vault />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/IAM' element={<Iam />} />
          <Route path='/Azure' element={<Azure />} />
        </Routes>
    </Router>
  );
}
export default Header;