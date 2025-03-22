import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Profession from './pages/Profession';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import Faq from './pages/Faq';
import MentionsLegales from './pages/MentionsLegales';
import MentionsConfidentialite from './pages/MentionsConfidentialite';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profession" element={<Profession />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/mentionslegales" element={<MentionsLegales />} />
          <Route path="/mentionsconfidentialite" element={<MentionsConfidentialite />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;