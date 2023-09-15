import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { myloader } from "./pages/Login";
import { requireAuth } from "./utills/utills";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Vans from "./pages/Vans";
import Vandetails from "./pages/Vandetails";
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
import { action as loginaction } from "./pages/Login";
import { Loader as detailsloader } from "./pages/Vandetails";
import { Loader as vanloader } from "./pages/Van";
import { vanDLoader } from "./pages/Host/Vand";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="host" element={<HostLayout />}>
        <Route
          loader={async ({ request }) => requireAuth(request)}
          index
          element={<Dashboard />}
        />
        <Route
          loader={async ({ request }) => await requireAuth(request)}
          path="income"
          element={<Income />}
        />

        <Route loader={vanloader} path="van" element={<Van />} />
        <Route
          loader={vanDLoader}
          errorElement={<Error />}
          path="van/:id"
          element={<Vand />}
        >
          <Route
            index
            loader={async ({ request }) => await requireAuth(request)}
            element={<Details />}
          />

          <Route
            loader={async ({ request }) => await requireAuth(request)}
            path="pricing"
            element={<Pricing />}
          />
          <Route
            loader={async ({ request }) => await requireAuth(request)}
            path="photos"
            element={<Photos />}
          />
        </Route>
        <Route
          loader={async ({ request }) => await requireAuth(request)}
          path="reviews"
          element={<Reviews />}
        />
      </Route>

      <Route
        path="vans"
        loader={vansloader}
        errorElement={<Error />}
        element={<Vans />}
      />
      <Route loader={detailsloader} path="vans/:id" element={<Vandetails />} />

      <Route path="contact" element={<Contact />} />

      <Route
        loader={myloader}
        action={loginaction}
        path="/login"
        element={<Login />}
      />

      <Route path="about" element={<About />} />

      <Route path="*" element={<Notfound />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
