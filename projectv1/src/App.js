import './App.css';
import CameraComponent from "./CameraComponent";

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
    return <>
        <div className="app-container">
            <Header />
            <CameraComponent/>
        </div>
    </>;
}

export default App;