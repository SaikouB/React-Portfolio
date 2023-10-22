// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Header from "./pages/Header"

export default function Container() {
  const [currentPage, setCurrentPage] = useState("About");

  // Switch statement that handles page rendering
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />
      case "Contact":
        return <Contact />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  const handlePageSwitch = (page) => setCurrentPage(page);
  return (
    <div>
      <Header />
      <NavTabs currentPage={currentPage} handlePageSwitch={handlePageSwitch} />
      <main className="mx-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}
