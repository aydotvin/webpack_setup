import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import App from "./../App";
import Counter from "Component/counter/Counter.js";
import PageNotFound from "../pages/page-not-found/PageNotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="app" element={<App />}>
            <Route path="counter" element={<Counter />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
