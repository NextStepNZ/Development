import React from "react";

  
const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Copyright © NextStep ${year}`}</footer>;
  };
  
  export default Footer;