import nprogress from "nprogress";
import "nprogress/nprogress.css";
import './App.css'
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { useEffect } from "react";
import AddFlatForm from "./pages/AddFlatForm/AddFlatForm";
import { HomeOwnerLogin } from "./pages/HomeOwnerLogin/HomeOwnerLogin";
import { LoginAdmin } from "./pages/LoginAdmin/LoginAdmin";

function App() {
  const location = useLocation();

  useEffect(() => {
      nprogress.start();
      nprogress.done();
  }, [location.pathname]);

  return (
  
      <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/flatform" element={<AddFlatForm/>} />
                <Route path="/homeowner" element={<HomeOwnerLogin/>} />
                <Route path="/admin" element={<LoginAdmin/>} />
                <Route path="*" element={<h1>404 Page not Found</h1>} />
            </Routes>
        </div>
   
  )
}

export default App
