import "./App.css";
import CameraComponent from "./CameraComponent";
import TestingHTTP from "./TestingHTTP";
import React, { useState } from "react";

const navLinks = ["Main", "About", "Credits"];

function NavMenu() {
    return (
        <nav className="navbar">
            {navLinks.map((navLink, index) => (
                <a key={index} className="navLink" id={`${navLink}-nav-link`} href="#">
                    {navLink}
                </a>
            ))}
        </nav>
    );
}

function Header() {
    return (
        <header className="app-header">
            <h1 className="app-logo">Project Name</h1>
            <NavMenu />
        </header>
    );
}

function App() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="app-container">
            <Header />
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <CameraComponent onImageSelect={setSelectedImage} />
            </div>
            <div style={{ marginTop: "50px" }}>
                <TestingHTTP selectedImage={selectedImage} />
            </div>
        </div>
    );
}

export default App;
