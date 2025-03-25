import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ProductPage from "../Pages/ProductPage";
import Policy from "../Pages/Policy";
import TermsConditions from "../Pages/TermsConditions";
import AllProducts from "../components/AllProducts";
import Faq from "../components/Faq";
import Contact from "../components/ContactUs";
import SendMessage from "../components/SendMessage";
import WhyChooseUs from "../components/WhyChooseUs";
import ShippingPolicy from "../components/ShippingPolicy";
import CategoryProductsPage from "../components/CategoryProductsPage";
import CategoryPage from "../components/CategoryPage";
import AllCategory from "../components/AllCategory";
import SearchPage from "../components/SearchPage";

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
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/all-category",
        element: <AllCategory />,
      },
      {
        path: "/shop-by-category/:id",
        element: <CategoryProductsPage />,
      },
      {
        path: "/category/:id",
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/contact-support",
        element: <SendMessage />,
      },
      {
        path: "/why-choose-us",
        element: <WhyChooseUs />,
      },
      {
        path: "/shipping-policy",
        element: <ShippingPolicy />,
      },
      {
        path: "/policy",
        element: <Policy />,
      },
      {
        path: "/terms-condition",
        element: <TermsConditions />,
      },
    ],
  },
]);

export default router;
