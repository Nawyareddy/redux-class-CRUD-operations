import { createRoot } from "react-dom/client";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import rootReducer from "./reducers/rootReducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(rootReducer, applyMiddleware(thunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
