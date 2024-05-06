import { useState } from "react";
import "./App.css";
import Page from "./Page";
import { ThemeContext } from "./ThemeContext";

function App() {
const [isDark, setIsDark] = useState(false);
return (
// 📌
<ThemeContext.Provider value={{ isDark, setIsDark }}>
<Page />
</ThemeContext.Provider>
);
}
export default App;
