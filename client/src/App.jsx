import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home-page"
import AboutPage from './pages/about-page';
import BlogPage from './pages/blog-page';
import ServicePage from './pages/service-page';
import ContactPage from './pages/contact-page';
import BlogDetailsPage from "./pages/blog-details-page";
import ScrollToTop from './utility/ScrollToTop';
import LoginPage from "./pages/login-page";
import DashboardPage from "./pages/dashboard-page";
import AddNewMemberPage from './pages/add-new-member-page';
import AddNewServicePage from "./pages/add-new-service-page";
import AddNewBlogPage from "./pages/add-new-blog-page";
import UpdateBlog from "./components/edit-update/update-blog";
import UpdateBlogPage from "./pages/update-blog-page";
import UpdateServicePage from "./pages/update-service-page";
import UpdateMemberPage from "./pages/update-member-page";
import NothingFoundPage from "./pages/nothing-found-page";


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="*" element={<NothingFoundPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-details/:id" element={<BlogDetailsPage/>} />
        <Route path="/service" element={<ServicePage/>} />
        <Route path="/contact" element={<ContactPage/>} />

        <Route path="/login" element={<LoginPage/>} />

        <Route path="/dashboard" element={<DashboardPage/>} />

        <Route path="/add-new-member" element={<AddNewMemberPage/>} />
        <Route path="/add-new-service" element={<AddNewServicePage/>} />
        <Route path="/add-new-blog" element={<AddNewBlogPage/>} />

        <Route path="/edit-blog/:id" element={<UpdateBlogPage/>} />
        <Route path="/edit-service/:id" element={<UpdateServicePage/>} />
        <Route path="/edit-member/:id" element={<UpdateMemberPage/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
