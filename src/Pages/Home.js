import React from "react";
import Section01 from "../components/Home/section01";
import Section02 from "../components/Home/section02";
import Section03 from "../components/Home/section03";
import Section04 from "../components/Home/section04";
import Section05 from "../components/Home/section05";
import Section06 from "../components/Home/section06";
import Section07 from "../components/Home/section07";
import Section08 from "../components/Home/section08";
import Section09 from "../components/Home/Section09";
import Section10 from "../components/Home/section10";
import Section11 from "../components/Home/section11";
import Section12 from "../components/Home/section12";
import Section13 from "../components/Home/section13";
import Section14 from "../components/Home/section14";
import "../index.css";
import VideoPlayer from "./SingleVideo/SingleVideo";

export default function Home({ HomePage }) {
  console.log("HomePage", HomePage.top_banner);
  return (
    <>
      <Section01 bannerData={HomePage} />

      <Section02 BrandData={HomePage} />
      <Section03 ServiceData={HomePage} />
      <Section04 />
      <Section05 VideoData={HomePage.video} />
      <Section06 />
      <Section07 ClientData={HomePage} />
      <Section08 MarketingHouseData={HomePage} />
      <Section09 CreativeHouseData={HomePage} />
      <Section10 DevelopmentHouseData={HomePage} />
      <Section11 />
      <Section12 />
      <Section13 SocialWorkData={HomePage} />
      <Section14 HireUsData={HomePage.hire_us} />
    </>
  );
}
