import React, { useEffect, useState } from "react";

import "./App.css";
import "./theme.scss";

import { ThemeContext } from "./contexts";
import { SideBar, TopBar } from "./partials";

// import { migrateDocumentsToFirestore } from "./firebase/firebase.utils";
// import exampleComponents from "./data/exampleComponents.data";
import { AdminPage, ComponentPage, HomePage } from "./pages/index";
import { Switch, Route } from "react-router-dom";

function App() {
  const [themeData, setThemeData] = useState({
    isDarkMode: true,
  });
  // Programmatically adds data from our exampleComponents.data.jsx file to our backend.

  // let componentsArray = Object.keys(exampleComponents.components.items).map(
  //   (key) => exampleComponents.components.items[key]
  // );
  // console.log(componentsArray);
  // useEffect(() => {
  //   migrateDocumentsToFirestore(
  //     "components",
  //     componentsArray.map(({ name, component, codeSnippet, styleSnippet }) => ({
  //       name,
  //       codeSnippet,
  //       styleSnippet,
  //     }))
  //   );
  // }, []);
  return (
    <ThemeContext.Provider value={{ themeData, setThemeData }}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/components">
            <ComponentPage />
          </Route>
          <Route exact path="/admin">
            <AdminPage />
          </Route>
        </Switch>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
