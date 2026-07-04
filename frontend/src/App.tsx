import { Routes, Route } from "react-router-dom";
import LoginCard from "./components/LoginCard/LoginCard";
import RegisterCard from "./components/RegisterCard/RegisterCard";
import ForgotPasswordCard from "./components/ForgotPasswordCard/ForgotPasswordCard";
import ForgotUserNameCard from "./components/ForgotUsernameCard/ForgotUsernameCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginCard />} />
      <Route path="/register" element={<RegisterCard />} />
      <Route path="/forgot-password" element={<ForgotPasswordCard />} />
       <Route path="/forgot-username" element={<ForgotUserNameCard />} />

    </Routes>
  );
}

export default App;