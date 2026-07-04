import "./LoginCard.css";
import learnPlayImage from "./assets/learn-play.png";

const LoginCard = () => {
  return (
    <div className="loginCard">
      <div className="loginCard__imageSection">
        <img
          src={learnPlayImage}
          alt="Learn and Play"
          className="loginCard__image"
        />
      </div>

      <div className="loginCard__formSection">
        <div className="inputGroup">
          <label htmlFor="username">Login</label>
          <input
            id="username"
            type="text"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
          />
        </div>

        <button className="signInButton">
          Sign in
        </button>

        <div className="links">
          <a href="#">Forgot Password</a>
          <span>|</span>
          <a href="#">Forgot Username</a>
          <span>|</span>
          <a href="#">First Time User</a>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;