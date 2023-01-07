import ReactDom from "react-dom/client";
import "Style/index.scss";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App></App>);
