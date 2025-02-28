import './index.css';
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { Provider } from './context/books.js'; // custom provider

createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
