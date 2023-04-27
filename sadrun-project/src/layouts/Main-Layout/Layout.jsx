import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/LandingPage/LandingNav/LandingNav";
import Footer from "../../components/Footer/Footer";

export default function Layout() {
  return (
    <>
      {/* <header>
        <Navigation />
      </header> */}
      <main>
        <Outlet />
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
}
