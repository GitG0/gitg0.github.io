import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from '../src/pages/Layout.tsx'
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Portfolio from './pages/Portfolio.tsx';
import { NoPage } from './pages/NoPage.tsx';
import { projectData } from "../src/mockData/projectData.ts";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}/>
          <Route path="contactMe" element={<Contact />}/>
          <Route path="portfolio" element={<Portfolio projects = {projectData}/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
)
