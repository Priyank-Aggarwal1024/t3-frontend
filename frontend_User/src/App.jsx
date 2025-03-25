import React, { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "../src/components/Loader";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import ScrollToTop from "./components/ScrollToTop";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.common["X-API-Key"] =
  import.meta.env.VITE_BACKEND_API_KEY;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="w-full"></div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <ScrollToTop />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 2000,
              style: {
                background: "#0395d0",
                fontSize: "12px",
                color: "#000",
                fontFamily: "Urbanist, 'sans-serif",
                borderRadius: "100px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
              },
            }}
          />
          <div className="w-[100vw] overflow-x-hidden">
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
