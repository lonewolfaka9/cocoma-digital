import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import Right from "./right";

export default function Header() {
  return (
    <header className="container-fluid header-top-nav">
      <div className="row align-items-center p-3">
        <div className="col-10 col-sm-10 col-md-3 col-lg-4">
          <Logo />
        </div>

        <div className="col-2 col-sm-2 col-md-7 col-lg-6 d-md-block">
          <Menu />
        </div>

        <div className="col-md-2 col-lg-2 d-none d-sm-none d-lg-block d-md-block">
          <Right />
        </div>

        {/* Mobile Menu */}
      </div>
    </header>
  );
}
