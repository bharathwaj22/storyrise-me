import React from "react";
import Scroll_btn from "../components/scroll.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      
      {children} 
      <div className="">
       <Scroll_btn></Scroll_btn>
        

    </div>
    </div>
  );
};
export default Layout;