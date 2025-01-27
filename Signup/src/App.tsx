
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import './style.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/signup" className="nav-link"></Link>
          <Link to="/signin" className="nav-link"></Link>
        </nav>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
