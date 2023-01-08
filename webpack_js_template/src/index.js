import ReactDom from "react-dom/client";
import "Style/index.scss";
import Router from "./routes/router";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Router />);
