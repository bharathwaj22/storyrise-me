import React from 'react'
import { lazy } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import Case_studies from '../components/Case_studies';
import Hoodie_case from '../Pages/Aryu_case';
import Aryu_case from '../Pages/Aryu_case';
import Coffee_case from '../Pages/Coffee_case';
import Storyrise_case from '../Pages/Hoodie_case';
import About_us from '../Pages/About_us';
import Contact from '../Pages/Contact';

function Routers() {
  return (
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/case-studies" element={<Case_studies />} />
     <Route path="/aryuacademy-guy" element={<Aryu_case/>}/>
     <Route path="/hoodie-guy" element={<Storyrise_case/>}/>

     <Route path="/coofee-guy" element={<Coffee_case/>}/>
     <Route path="/about-us" element={<About_us/>}/>
     <Route path="/contact-us" element={<Contact/>}/>

   </Routes>
  )
}

export default Routers