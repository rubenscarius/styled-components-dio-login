import Home from "./pages/home/index.js";
import Login from "./pages/login/index.js";
import Feed from "./pages/feed/index.js";
import SignUp from "./pages/signup/index.js";
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="feed" element={<Feed />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
