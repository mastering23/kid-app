import "./ForgotPasswordCard.css";

const ForgotPasswordCard = () => {
  return (
    <div className="forgotPasswordCard">
      <div className="forgotPasswordCard__container">
        <h2 className="title">Forgot Password</h2>

        <p className="subtitle">
          Enter your email and we’ll send you a reset link.
        </p>

        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <button className="resetButton">
          Send Reset Link
        </button>

        <div className="links">
          <a href="#">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordCard;