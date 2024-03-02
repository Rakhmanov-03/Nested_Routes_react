import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* <header>header</header> */}
      <main>
        <Outlet></Outlet>
      </main>
      {/* <footer>footer</footer> */}
    </div>
  );
}

export default Layout;
