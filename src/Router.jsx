import { BrowserRouter, Route, Routes , Navigate} from "react-router-dom";
import { Login } from "./pages/Login";
import Main from "./layouts/Main";
import RegisterWalker from "./pages/RegisterWalker";
import RegisterPet from "./pages/RegisterPet";
import Pets from "./pages/Pets";
import { Home } from "./pages/Home";
import Walker from "./pages/Walker";


const Router = () => {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<ProtectedRoute><Main /></ProtectedRoute>}>
     <Route path="" element={<Home />} />
     <Route path="/register-walker" element={<RegisterWalker />} />
     <Route path="/register-pet" element={<RegisterPet />} />
     <Route path="/pets" element={<Pets />} />
     <Route path="/walker" element={<Walker />} />

    </Route>
   </Routes>
  </BrowserRouter>
 );
};

export default Router;

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token'); 
  
    return isAuthenticated ? children : <Navigate to="/login" />;
  };
