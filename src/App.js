import { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import './App.css';  // Make sure to import the CSS file

const App = () => {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div className="App">
      <button className="switch-button" onClick={() => setIsRegister(!isRegister)}>
        {isRegister 
          ? "Don't have an account? Register" 
          : "Already have an account? Login"}
      </button>
      <div className="form-container">
        {isRegister ? <RegisterForm /> : <LoginForm />}
      </div>
    </div>
  );
};

export default App;
