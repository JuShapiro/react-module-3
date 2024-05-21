import "modern-normalize";
// import { useState } from "react";
import "./App.css";
import { useState } from "react";

// const LoginForm = ({ onLogin }) => {
//   const loginId = useId();
//   const passwordId = useId();
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const { login, password } = form.elements;
//     onLogin({
//       login: login.value,
//       password: password.value,
//     });

//     form.reset();
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor={loginId}>Login</label>
//       <input type="text" name="login" id={loginId} />

//       <label htmlFor={passwordId}>Password</label>
//       <input type="password" name="password" id={passwordId} />

//       <button type="submit">Login</button>
//     </form>
//   );
// };
// const MyComponent = () => {
//   const id = useId();
//   return (
//     <div>
//       <label htmlFor={id}>Text field label</label>
//       <input type="text" id={id} />
//     </div>
//   );
// };
// const SearchBar = () => {
//   const [inputValue, setInputValue] = useState("");

//   const handleChange = (evt) => {
//     setInputValue(evt.target.value);
//   };
//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleChange} />
//       <p>{inputValue}</p>
//     </div>
//   );
// };

// const App = () => {
//   const handleLogin = (userData) => {
//     console.log(userData);
//   };
//   return (
//     <div>
//       <h1>Please login to your account!</h1>
//       <LoginForm onLogin={handleLogin} />
//       <MyComponent />

//       <SearchBar />
//     </div>
//   );
// };

// export default App;

// const LangSwitcher = () => {
//   const selectId = useId();

//   return (
//     <div>
//       <label htmlFor={selectId}>Choose language</label>
//       <select id={selectId}>
//         <option value="en">English</option>
//         <option value="uk">Ukrainian</option>
//         <option value="pl">Polish</option>
//       </select>
//     </div>
//   );
// };

// export default LangSwitcher;

// const LangSwitcher = ({ value, onSelect }) => {
//   const selectId = useId();

//   return (
//     <div>
//       <label htmlFor={selectId}>Choose language</label>
//       <select
//         id={selectId}
//         value={value}
//         onChange={(evt) => onSelect(evt.target.value)}
//       >
//         <option value="uk">Ukrainian</option>
//         <option value="en">English</option>
//         <option value="pl">Polish</option>
//       </select>
//     </div>
//   );
// };

// const App = () => {
//   const [lang, setLang] = useState("uk");
//   return (
//     <>
//       <p>Selected language: {lang}</p>
//       <LangSwitcher value={lang} onSelect={setLang} />
//     </>
//   );
// };

// export default App;

// const App = () => {
//   const [coffeeSize, setCoffeeSize] = useState("sm");

//   const handleSizeChange = (evt) => {
//     setCoffeeSize(evt.target.value);
//   };
//   return (
//     <>
//       <h1>Select coffee size</h1>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="sm"
//           checked={coffeeSize === "sm"}
//           onChange={handleSizeChange}
//         />
//         Small
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="md"
//           checked={coffeeSize === "md"}
//           onChange={handleSizeChange}
//         />
//         Medium
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="lg"
//           checked={coffeeSize === "lg"}
//           onChange={handleSizeChange}
//         />
//         Large
//       </label>
//       <p>
//         <b>Selected size: {coffeeSize}</b>
//       </p>
//     </>
//   );
// };

// export default App;

const App = () => {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
  );
};

export default App;
