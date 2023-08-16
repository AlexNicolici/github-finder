import "./styles/App/App.css";
import "./styles/Users/Users.css";
import Navbar from "./Components/layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import User from "./Pages/User";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" Component={About} />
            <Route path="/user/:login" element={<User />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
