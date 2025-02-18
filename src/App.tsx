import { FC } from "react";
import "./App.scss";
import "./styles/styles.scss";
import { useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";

import { RoleContext } from "./contexts/RoleContext";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import BlogList from "./pages/BlogList/BlogList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Blog from "./pages/Blog/Blog";
import BlogArticleDetails from "./pages/BlogArticleDetails/BlogArticleDetails";
import RoleSwitcher from "./components/RoleSwitcher/RoleSwitcher";
import PostForm from "./components/PostForm/PostForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// initial value of role: Admin
const initialRole = {
  isAdmin: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setIsAdmin":
      return { ...state, isAdmin: action.value };
    default:
      break;
  }
};

const queryClient = new QueryClient();

const App: FC = () => {
  const [role, dispatch] = useReducer(reducer, initialRole);

  useEffect(() => {
    console.log("Is Admin?: ", role.isAdmin);
  }, [role]);

  return (
    <RoleContext.Provider value={{ role, dispatch }}>
      <QueryClientProvider client={queryClient}>
        <div className="app-container">
          {role.isAdmin && <SideBar />}
          <div className="app-content">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={role.isAdmin ? <BlogList /> : <Blog />}
              />
              <Route
                path="/blog"
                element={role.isAdmin ? <BlogList /> : <Blog />}
              />
              <Route path="/blog/list" element={<BlogList />} />
              <Route
                path="/blog/details/:id"
                element={<BlogArticleDetails />}
              />
              <Route path="/product/details" element={<ProductDetails />} />
              {role.isAdmin && (
                <>
                  <Route path="/blog/post/create" element={<PostForm />} />
                  <Route path="/blog/post/edit" element={<PostForm />} />
                </>
              )}
            </Routes>
            {!role.isAdmin && <Footer />}
          </div>

          <RoleSwitcher />
        </div>
      </QueryClientProvider>
    </RoleContext.Provider>
  );
};

export default App;
