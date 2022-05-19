import React from "react";
import LandingPage from "../components/index/LandingPage";
import About from "../components/index/About";
import ContactForm from "../components/index/ContactForm";


function Home() {
    return (
    <div>
        <LandingPage />
        <About />
        <ContactForm />
    </div>)
}

export default Home;