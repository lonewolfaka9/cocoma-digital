import React, { useState } from "react";
import Section01 from "../components/Home/section01";
import Section02 from "../components/Home/section02";
// import Section03 from "../components/Home/section03";
import Section04 from "../components/Home/section04";
import Section05 from "../components/Home/section05";
import Section06 from "../components/Home/section06";
import Section07 from "../components/Home/section07";
import Section08 from "../components/Home/section08";
import Section09 from "../components/Home/Section09";
import Section11 from "../components/Home/section11";
import Section12 from "../components/Home/section12";
import { RiFunctionAddLine } from "react-icons/ri";
import ExploreOurServices from "../components/Home/services";
import BusinessCareerSection from "../components/Home/section14";

export default function Home({
  HomePage,
  ServiceData,
  CreativeHouseData,
  MarketingHouseData,
  MonthlyPerformanaceData,
}) {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Toggle function
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
            <Section01 bannerData={HomePage} />
            <Section02 />
            <ExploreOurServices ServidcesToShow={ServiceData}/>
            {/* <Section03  /> */}
            <Section04 ServidcesToShow={ServiceData} />
            <Section05 VideoData={HomePage} />
            <Section06 />
            <Section07 ClientData={HomePage} />
            <Section08 MarketingHouseSection={MarketingHouseData} />
            <Section09 CreativeHouseSection={CreativeHouseData} />
            <Section11 MonthlyPerformanaceData={MonthlyPerformanaceData} />
            <Section12 bannerData={HomePage} />
            <BusinessCareerSection/>
         
    </>
  );
}
