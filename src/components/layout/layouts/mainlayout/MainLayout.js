import React from "react";

import { NavBar } from "../../navbar";
import { Footer } from "../../footer";

import "./MainLayout.css";

export default function MainLayout(props) {
  return (
    <div className="MainLayout">
      <NavBar />
      <main id="y-main-content">{props.children}</main>

      {!props.hideFooter && <Footer />}
    </div>
  );
}
