import React, { useEffect, useState } from "react";
// import Footer from "./components/Footer/footer";
// import Header from "./components/header/header";
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

export default function Home() {
  const [homeData, setHomeData] = useState();
  // console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch(
          "https://admin.cocomadigital.com/public/api/home"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setHomeData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <Section01 bannerData={homeData} />

      <Section02 BrandData={homeData} />
      <Section03 ServiceData={homeData} />
      <Section04 />
      <Section05 VideoData={homeData.video} />
      <Section06 />
      <Section07 ClientData={homeData} />
      <Section08 MarketingHouseData={homeData} />
      <Section09 CreativeHouseData={homeData} />
      <Section10 DevelopmentHouseData={homeData} />
      <Section11 />
      <Section12 />
      <Section13 SocialWorkData={homeData} />
      <Section14 HireUsData={homeData.hire_us} />
    </>
  );
}
