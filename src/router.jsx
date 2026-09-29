import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";
import Shop from "./pages/Shop";
import FAQs from "./pages/FAQs";
import SignIn from "./pages/SignIn";
import SignupForm from "./pages/SignupForm";
import ProductView from "./pages/ProductView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/faqs",
        element: <FAQs />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignupForm />,
      },
      {
        path: "/productview",
        element: <ProductView />,
      }
    ],
  },
]);

export default router;
