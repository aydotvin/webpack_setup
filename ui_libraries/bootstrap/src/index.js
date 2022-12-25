import ReactDom from "react-dom/client";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App ></App>);
