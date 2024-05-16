import "./App.css";
import { useTheme } from "./theme";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="darkModeWrapper">
      <div className="themeName">{theme}</div>
      <label className="switch">
        <input type="checkbox" onClick={toggleTheme} checked={theme==="dark-mode"}/>
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default App;
