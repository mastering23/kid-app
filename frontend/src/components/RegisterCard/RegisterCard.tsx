import "./RegisterCard.css";

const RegisterCard = () => {
  return (
    <div className="registerCard">
      <div className="registerCard__formSection">
        <h2 className="title">Create Account</h2>

        <div className="inputGroup">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" placeholder="Enter username" />
        </div>

        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter email" />
        </div>

        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Enter password" />
        </div>

        <div className="inputGroup">
          <label htmlFor="confirmPassword">Confirm</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm password"
          />
        </div>

        <button className="registerButton">Register</button>

        <div className="links">
          <a href="#">Already have an account?</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;