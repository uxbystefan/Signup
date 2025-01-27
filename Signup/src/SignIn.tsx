
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
      <Link to="/signup" className="link-transition">Don't have an account? Sign Up</Link>
    </div>
  );
}

export default SignIn;
