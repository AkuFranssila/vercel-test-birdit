import { Routes, Route, Link } from "react-router";
import "./App.css";

// Simple components for our routes
const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Profile = () => <h1>User Profile Page</h1>;
const NotFound = () => <h1>404 - Page Not Found</h1>;

function App() {
  return (
    <>
      <header>
        <nav>
          <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile/123">Profile</Link>
            </li>
            <li>
              <Link to="/non-existent">Broken Link</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <p>Test app for Vercel routing</p>
      </footer>
    </>
  );
}

export default App;
