import { Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/settings" element={<Settings></Settings>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/account" element={<Account></Account>}></Route>
        </Route>
      </Routes>
    </>
  );
}
{
  /* <Route path="/settings">
<Route index={true} element={<Profile></Profile>}></Route>
<Route path="account" element={<Account></Account>}></Route>
</Route> */
}
export default App;
