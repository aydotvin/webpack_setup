import { BrowserRouter, Routes, Route } from "react-router-dom";

import Counter from "Pages/counter/Counter";
import About from "Pages/about/About";
import PageNotFound from "Pages/page-not-found/PageNotFound";
import App from "Src/App";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/counter" element={<Counter />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
