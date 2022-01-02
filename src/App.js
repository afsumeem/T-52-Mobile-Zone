import "./App.css";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/:productInfo" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
