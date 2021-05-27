import React from "react";

const routes = [
  {
    path: "/pendaftaran",
    component: React.lazy(() => import("views/pages/Registration")),
    exact: true,
  },
  {
    path: "/daftar-pendonor",
    component: React.lazy(() => import("views/pages/Users")),
    exact: true,
  },
];

export default routes;