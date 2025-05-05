import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import BlogProvider from "./context/blog-context/BlogProvider";
import FormProvider from "./context/form-context/FormProvider";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BlogProvider>
        <FormProvider>
          <App />
        </FormProvider>
      </BlogProvider>
    </BrowserRouter>
  </StrictMode>
);
