import React from "react";
import Marquee from "react-fast-marquee";

export default function Section02(){
  return(
    <>
    <div className="trusted-brand">
      <center>
        <p>
          Trusted by Leading Brands Worldwide
        </p>
      </center>
      <Marquee className="mt-3">
        <img src="../../Images/showcard.svg" alt=""  /> 
        <img src="../../Images/primevideo.svg" alt="" /> 
        <img src="../../Images/imdb.svg" alt="" /> 
        <img src="../../Images/tataev.svg" alt="" /> 
        <img src="../../Images/langistan.svg"  alt="" /> 
        <img src="../../Images/amazontv.svg" alt="" />
      </Marquee>
    </div>
          
    </>
  )
}