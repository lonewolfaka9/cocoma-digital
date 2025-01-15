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
// import Section10 from "../components/Home/section10";
import Section11 from "../components/Home/section11";
import Section12 from "../components/Home/section12";
import Section13 from "../components/Home/section13";
// import Section14 from "../components/Home/section14";

export default function Home({
  HomePage,
  ServiceData,
  CreativeHouseData,
  MarketingHouseData,
  MonthlyPerformanaceData,
}) {
  return (
    <>
      <Section01 bannerData={HomePage} />
      <Section02 />
      <Section03 ServidcesToShow={ServiceData} />
      <Section04 ServidcesToShow={ServiceData} />
      <Section05 VideoData={HomePage} />
      <Section06 />
      <Section07 ClientData={HomePage} />
      <Section08 MarketingHouseData={MarketingHouseData} />
      <Section09 CreativeHouseSection={CreativeHouseData} />
      {/* <Section10 DevelopmentHouseData={HomePage} /> */}
      <Section11 MonthlyPerformanaceData={MonthlyPerformanaceData} />
      <Section12 bannerData={HomePage} />
      {/* <Section13 SocialWorkData={HomePage} /> */}
      {/* <Section14 /> */}
    </>
  );
}
