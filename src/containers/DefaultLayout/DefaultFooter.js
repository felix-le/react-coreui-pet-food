import React from "react";
import {Link} from 'react-router-dom';
const DefaultFooter = () => {
  return (
    <footer className="app-footer">
      <span><Link to="google.com">Google.com</Link> Just search it</span> 
      <span className="ml-auto">Hello girl</span>
    </footer>
  )

};

export default DefaultFooter;
