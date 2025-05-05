import { createContext, useContext } from "react";

export const BlogContext = createContext();
export const useCihatBlog = () => useContext(BlogContext);
