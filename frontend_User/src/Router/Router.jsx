import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ProductPage from "../Pages/ProductPage";
import Category from "../Pages/Category";
import Policy from "../Pages/Policy";
import TermsConditions from "../Pages/TermsConditions";
import AllCategories from "../Pages/AllCategories";
import AllProducts from "../components/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/tnc",
        element: <TermsConditions />,
      },
      {
        path: "/privacy-policy",
        element: <Policy />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />
      },
      {
        path: "/all-products",
        element: <AllProducts />
      },
      {
        path: "/collections/:type",
        element: <Category />,
      },
      {
        path: "/categories",
        element: <AllCategories />,
      },
    ],
  },
]);

export default router;
