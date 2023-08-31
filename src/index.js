import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { myloader } from "./pages/Login";
import utills, { requireAuth } from "./utills/utills";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Vans from "./pages/Vans";
import Vandetails from "./pages/Vandetails";
import Header from "./components/Header";
import Layout from "./components/Layout";
import "../src/Server";
import Dashboard from "./pages/Host/Dashboard";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import HostLayout from "./pages/Host/HostLayout";
import Van from "./pages/Van";
import Vand from "./pages/Host/Vand";
import Details from "./pages/Host/Details";
import Photos from "./pages/Host/Photos";
import Pricing from "./pages/Host/Pricing";
import Notfound from "./pages/Notfound";
import { loader as vansloader } from "./pages/Vans";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Auth from "./components/Auth";
import { Loader as pricingloader } from "./pages/Host/Pricing";

import { Loader as detailsloader } from "./pages/Vandetails";
import { Loader as vanloader } from "./pages/Van";
import { Loader as DDD } from "./pages/Host/Vand";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route  index element={<App />} />
      <Route path="host" element={<HostLayout />}>
        <Route loader={async ()=>requireAuth()} index element={<Dashboard />} />
        <Route
          loader={async () => await requireAuth()}
          path="income"
          element={<Income />}
        />

        <Route loader={vanloader} path="van" element={<Van />} />
        <Route errorElement={<Error />} path="van/:id/" element={<Vand />}>

          <Route
            loader={async () => {
              await requireAuth();
            }}
            index
            element={<Details />}
          />

          <Route
            loader={pricingloader}
            path="pricing"
            element={<Pricing />}
          />
          <Route
            loader={async () => {
              return null
            }}
            path="photos"
            element={<Photos />}
          />
        </Route>
        <Route loader={async () => {
              return null
            }} path="reviews" element={<Reviews />} />
      </Route>

      <Route
        path="vans"
        loader={vansloader}
        errorElement={<Error />}
        element={<Vans />}
      />
      <Route loader={detailsloader} path="vans/:id" element={<Vandetails />} />

      <Route path="contact" element={<Contact />} />

      <Route loader={myloader} path="/login" element={<Login />} />

      <Route
        path="protected"
        element={<h1>Super secret info here</h1>}
        loader={async () => await requireAuth()}
      />

      <Route path="about" element={<About />} />

      <Route path="*" element={<Notfound />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
