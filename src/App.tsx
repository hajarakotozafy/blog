import { FC } from 'react';
import './App.scss';

import { Route, Routes } from 'react-router-dom';

import SignIn from './pages/SignIn/SignIn';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SideNav from './components/SideNav/SideNav';
import DashboardNav from './components/DashboardNav/DashboardNav';
import BlogList from './pages/BlogList/BlogList';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Blog from "./pages/Blog/Blog";
import BlogArticleDetails from './pages/BlogArticleDetails/BlogArticleDetails';

const App: FC = () => {
  
  return (
    <>
      {/* <DashboardNav/>
      <SideNav/> */}
      <Routes>
          <Route path='/blog' element={<Blog/>} />
          <Route path='/blog/list' element={<BlogList/>} />
          <Route path='/product/details' element={<ProductDetails/>} />
          <Route path='/blog/article/details' element={<BlogArticleDetails/>} />
      </Routes>
      <Footer/>
      
       
      
    </>
  )
}

export default App
