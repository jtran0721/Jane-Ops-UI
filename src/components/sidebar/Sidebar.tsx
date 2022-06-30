import React from 'react';
import "../styles/Styles.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
const Sidebar = () => {
    const svgRef = React.useRef();

  return (
    <div className="sidebar">
      <div className="top">
        
          <span className="logo">S.P.A.C.E</span>
        
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
          <DashboardIcon ref={svgRef}/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
         
            <li>
             
              <span>Reports</span>
            </li>
          
          
            <li>
              
              <span>Custodian</span>
            </li>
         
          <li>
            
            <span>Infrastructure Cost</span>
          </li>
          <li>
           
            <span>Reliability (SLO)</span>
          </li>
          <li>
           
            <span>Partnership</span>
          </li>
          
          <p className="title">SETTINGS</p>
          <li>
           
            <span>System Health</span>
          </li>
          <li>
           
            <span>Logs</span>
          </li>
          <li>
           
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
           
            <span>Profile</span>
          </li>
          <li>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;