
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/signin" className="link-transition">Already have an account? Sign In</Link>
    </div>
  );
}

export default SignUp;
