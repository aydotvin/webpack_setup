import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "Style/index.scss";
import Router from "./routes/router";
import { persistedStore, store } from "./state/store";

const root = ReactDom.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <Router />
    </PersistGate>
  </Provider>,
);
