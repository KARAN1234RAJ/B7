import React from "react";
import LOGO_APNA_THALI from "./logo/LOGO_APNA_THALI.png";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src={LOGO_APNA_THALI}
          alt="logo"
          height="105px"
          width="107px"
          style={{ borderRadius: "500px" }}
        />
        <h1 style={{
          fontSize: "48px",
          fontWeight: "700",
          lineHeight:"60px",
          font:"lexend Deca"
        }}>
          Apna <span 
          style={{color:"#f54d4e"}}
          >Thali</span>
        </h1>
      </div>
      <div style={{backgroundColor:"#f5dcc0",
      width:"270px",
      height:"63px",
      borderRadius:"31.5px",
      }}>
          <h5 style={{
               fontSize:"14px",
               fontWeight:"600",
               lineHeight:"21.94px",
               font:"Montserrat",
               textAlign:"center",
               color:"#FF4B3C"
          }}>JAHA JAAO WAHA KHAO PLANS</h5>
      </div>
      <div>I am</div>
    </div>
  );
};

export default Header;
