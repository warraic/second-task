import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./usersAuthentication/login";
import SignUp from "./usersAuthentication/SignUp";
import UserOne from "./view/UserOne";
import UserTwo from "./view/UserTwo";
import PrivateRoutes from "./private.js/PrivateRoutes";
import Navbar from './components/Nav'
import Home from "./pages/Home";
function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        {/*<Route path="*" element={<Error />} /> */}

        {/*-------------private routes user one ----------*/}
        <Route path="/private" element={<PrivateRoutes />}>

        <Route path="user-one" element={<UserOne />}/>
        

        </Route>
        {/*-------------private routes user two ----------*/}
        <Route path="/private" element={<PrivateRoutes />}>
        <Route path="user-two" element={<UserTwo />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


//