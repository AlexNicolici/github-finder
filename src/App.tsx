import "./styles/App/App.css";
import "./styles/Users/Users.css";
import Navbar from "./Components/layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import User from "./Pages/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Alert from "./Components/layout/Alert";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/user/:login" Component={User} />
                <Route path="*" Component={PageNotFound} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
