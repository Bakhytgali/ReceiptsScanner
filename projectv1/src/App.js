import "./App.css";
import CameraComponent from "./CameraComponent";

const navLinks = ["Main", "About", "Credits"];

function NavMenu() {
    return (
        <nav className="navbar">
            {navLinks.map((navLink, index) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
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
    return (
        <div className="app-container">
            <Header />
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <CameraComponent />
            </div>
        </div>
    );
}

export default App;
