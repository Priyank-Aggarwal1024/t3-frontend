import React, { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/theme";
import Footer from "./components/Footer";
import Loader from '../src/components/Loader'
import { Toaster } from "react-hot-toast";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-API-Key'] = import.meta.env.VITE_BACKEND_API_KEY;

const App = () => {
  const [themeMode, setThemeMode] = useState(localStorage.getItem("themeMode") || "light");
  // Toggle functions for theme
  const darkTheme = useCallback(() => setThemeMode("light"), []);
  const lightTheme = useCallback(() => setThemeMode("light"), []);

  const updateTheme = useCallback(() => {
    document.documentElement.className = themeMode;
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  useEffect(() => {
    updateTheme();
  }, [updateTheme]);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
      <Navbar />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: "#0395d0",
            fontSize: '12px',
            color: "#000",
            fontFamily: "Urbanist, 'sans-serif",
            borderRadius: "100px",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
          },
        }}
      />
      <Outlet />
      <Footer />
      </>
      )}
    </>
  );
};

export default App;
