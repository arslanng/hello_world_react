import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import About from "./components/Routing/About";
import User from "./components/Routing/User";
import Home from "./components/Routing/Home";
import Users from "./components/Routing/Users";
import Error404 from "./components/Routing/Error404";

function App() {
  const activeStyle = {backgroundColor: "black", color: "white"}
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink style={({isActive}) => isActive ? activeStyle: undefined} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink style={({isActive}) => isActive ? activeStyle: undefined} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink style={({isActive}) => isActive ? activeStyle: undefined} to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/users/*" element={<Users/>}>
            <Route path=":id" element={<User />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
