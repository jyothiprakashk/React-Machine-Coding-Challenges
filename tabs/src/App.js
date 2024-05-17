import "./App.css";
import { TABS_CONFIG } from "./config";
import { Tabs } from "./tabs";

function App() {
  return (
    <div className="App">
      <Tabs defaultSelect={0} tabsData={TABS_CONFIG} />
    </div>
  );
}

export default App;
