import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/404";
import { Home } from "../pages/home";

const MainRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/page1",
    component: <Home />,
  },
];

export const MainRouters = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {MainRoutes.map(route => (
            <Route key={route.path} path={route.path} element={route.component} />
          ))}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
