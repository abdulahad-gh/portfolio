import { Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import ProjectDetails from './pages/ProjectDetails';
import Footer from './pages/shared/Footer';
import Navbar from './pages/shared/Navbar';
import MouseParticles from 'react-mouse-particles'


function App() {

  return (
    <>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='projects' element={<Projects />} /> */}
        <Route path='project/:id' element={<ProjectDetails />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>


      <Footer />
      <MouseParticles g={1} num={6} color="random" cull="stats,image-wrapper" level={6} />

    </>
  );
}

export default App;
