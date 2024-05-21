import "modern-normalize";
import { useId, useState } from "react";
import "./App.css";

const LoginForm = ({ onLogin }) => {
  const loginId = useId();
  const passwordId = useId();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { login, password } = form.elements;
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />

      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />

      <button type="submit">Login</button>
    </form>
  );
};
const MyComponent = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Text field label</label>
      <input type="text" id={id} />
    </div>
  );
};
const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};

const App = () => {
  const handleLogin = (userData) => {
    console.log(userData);
  };
  return (
    <div>
      <h1>Please login to your account!</h1>
      <LoginForm onLogin={handleLogin} />
      <MyComponent />

      <SearchBar />
    </div>
  );
};

export default App;
