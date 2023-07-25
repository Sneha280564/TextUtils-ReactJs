import { useState } from "react";
import "./App.css";
import AboutP from "./components/AboutP";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#00172D";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils -  Mode";
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        title="TextUtils2"
        aboutText="TextAbouts"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-4" mode={mode}>
        <Switch>
          <Route exact path="/">
            <TextForm
              showAlert={showAlert}
              heading="Enter Text to analyze "
              mode={mode}
            />
          </Route>
          <Route exact path="/about">
            <AboutP />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
