import React from "react";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";
function Home() {
  console.log(1);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default Home;
