import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import FooterComponent from "./components/FooterComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/contact";
import ErrorBoundry from "./components/ErrorBoundry";
import RestaurantDetails from "./components/ResturantDetail";
import AboutClass from "./components/AboutClass";
import Cart from "./components/Cart";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName("Akshata");
  }, []);

  return (
    <div className="app-container">
      <Provider store={appStore}>
        <userContext.Provider value={{ LoggedInUser: userName, setUserName }}>
          <HeaderComponent />

          <Outlet />
          <FooterComponent />
        </userContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutClass />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorBoundry />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
