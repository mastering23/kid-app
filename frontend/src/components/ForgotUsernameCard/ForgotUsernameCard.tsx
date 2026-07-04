import { Link } from "react-router-dom";
import "./ForgotUsernameCard.css";

const ForgotUsernameCard = () => {
  return (
    <div className="forgotUsernameCard">
      <div className="forgotUsernameCard__container">
        <h2 className="title">Forgot Username</h2>

        <p className="subtitle">
          Enter your email and we’ll send you your username.
        </p>

        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <button className="sendButton">
          Send Username
        </button>
            <div className="links">
          <Link to="/">Back to Login</Link>
        </div>     
      </div>
    </div>
  );
};

export default ForgotUsernameCard;