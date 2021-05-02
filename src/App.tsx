import React from "react";

import NavBar from "./components/NavBar";
import FirstSection from "./components/FirstSection";
import InfoSection from "./components/InfoSection";
import TechSection from "./components/TechSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <FirstSection />
        <InfoSection />
        <TechSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
