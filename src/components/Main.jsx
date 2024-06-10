import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main>
      <Header />
      <section className="h-[80vh]">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}

export default Main;
