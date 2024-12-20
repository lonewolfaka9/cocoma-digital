import React from "react";
import Section01 from "../components/About/section01";
import Section02 from "../components/Home/section02";
import Section03 from "../components/About/section03";
import Section04 from "../components/About/section04";
import Section05 from "../components/About/section05";
import Section06 from "../components/About/section06";
import Section07 from "../components/About/section07";
import Section08 from "../components/About/section08";
import Section09 from "../components/About/section02";

export default function Services({ HomePage }) {
  return (
    <>
      <Section01 />
      <Section02 BrandData={HomePage} />
      <Section09 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section08 />
      <Section07 />
    </>
  );
}
