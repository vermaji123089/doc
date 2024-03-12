import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Router from "../routes/Router";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
