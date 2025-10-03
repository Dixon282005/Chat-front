import { Routes, Route, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../styles/App.css";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Lobby  from "./lobby";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Connect</h1>
      <h2>Chat on real-time with your friends</h2>
      <Button onClick={() => navigate("/signin")}>Get Started</Button>
      <Button onClick={() => navigate("/signup")}>Sign In</Button>
      
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/lobby" element = {<Lobby/>} />
    </Routes>
  );
}
