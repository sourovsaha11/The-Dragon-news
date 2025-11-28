import React from "react";
import { Outlet } from "react-router";
import Header from "../../component/Header";
import Navbar from "../../component/Navbar";
import LeftAside from "../../component/Homelayout/LeftAside";
import RightAside from "../../component/Homelayout/RightAside";
import Home from "../../Pages/Home";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>

        {/* Navbar section */}
        <Navbar></Navbar>
      </header>

      {/* left side aside components are here */}
      <main className="grid grid-cols-12 w-11/12 mx-auto gap-5">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>

        {/* news feed is this  */}
        <section className="main-content col-span-6">
          <Home></Home>
          <Outlet></Outlet>
        </section>

        {/* Right side aside component are here */}
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
