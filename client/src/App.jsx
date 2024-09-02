import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CreateBlogPost from './pages/CreateBlogPost';
import Profile from './pages/Profile';
import Blogs from './pages/Blogs';
import { Auth, Footer, Nav } from './components';
import SingleBlogPost from './pages/SingleBlogPost';


function App() {
  const location = useLocation();
  const noNavAndFooterPaths = ['/auth'];
  return (
    <>
      {!noNavAndFooterPaths.includes(location.pathname) && <Nav />}    
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/create" element={<CreateBlogPost/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/blog" element={<Blogs/>}/>
      <Route path="/blog/:id" element={<SingleBlogPost />} />
    </Routes>
    {!noNavAndFooterPaths.includes(location.pathname) && <Footer />}    
    </>
    
  )
}

export default App
