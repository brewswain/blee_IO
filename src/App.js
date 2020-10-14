import React, {  useState } from "react";

import "./App.css";
import "./theme.scss";

import { ThemeContext } from "./contexts";

// import { migrateDocumentsToFirestore } from "./firebase/firebase.utils";
// import exampleComponents from "./data/exampleComponents.data";
import {
  AdminPage,
  CommonFlowPage,
  ComponentPage,
  HomePage,
  ProjectStructurePage,
} from "./pages/index";
import { Switch, Route } from "react-router-dom";

function App() {
  const [themeData, setThemeData] = useState({
    isDarkMode: true,
  });

  // Programmatically adds data from our exampleComponents.data.jsx file to our backend.

  // let componentsArray = Object.keys(exampleComponents.components.items).map(
  //   (key) => exampleComponents.components.items[key]
  // );
  // useEffect(() => {
  //   migrateDocumentsToFirestore(
  //     "components",
  //     componentsArray.map(({ name, component, codeSnippet, styleSnippet }) => ({
  //       // codeSnippet_1, codeSnippet_2, codeSnippet_3
  //       codeSnippet,
  //       styleSnippet,
  //       name,

  //       // codeSnippet_1,
  //       // codeSnippet_2,
  //       // codeSnippet_3,
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
          <Route path="/commonFlows">
            <CommonFlowPage />
          </Route>
          <Route path="/projectStructure">
            <ProjectStructurePage />
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
