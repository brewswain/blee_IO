import React, 
{ 
  // useEffect,
   useState } 
from "react";

import "./App.css";
import "./theme.scss";
import './media-queries/HalfMonitor.style.scss'

import { ThemeContext } from "./contexts";
import {SideBar, TopBar} from './partials'

import {
  AdminPage,
  CommonFlowPage,
  ComponentPage,
  HomePage,
  ProjectStructurePage,
} from "./pages/index";
import { Switch, Route } from "react-router-dom";

// import { migrateDocumentsToFirestore } from "./firebase/firebase.utils";
// import exampleComponents from "./data/exampleComponents.data";

const App = () => {
  const [themeData, setThemeData] = useState({
    isDarkMode: true,
  });

  // Programmatically adds data from our exampleComponents.data.jsx file to our backend.

  // let componentsArray = Object.keys(exampleComponents.projectStructure.items).map(
  //   (key) => exampleComponents.projectStructure.items[key]
  // );
  // useEffect(() => {
  //   migrateDocumentsToFirestore(
  //     "projectStructure",
  //     componentsArray.map(({ 
  //       name,

  //       // component, 
  //       // codeSnippet, 
  //       // styleSnippet,

  //       // (projectStructure and commonFlows stuff)
  //       codeSnippet_1,
  //       codeSnippet_2,
  //       codeSnippet_3,
  //     }) => ({
  //       name,

  //       // codeSnippet,
  //       // styleSnippet,

  //       // (projectStructure)
  //       codeSnippet_1,
  //       codeSnippet_2,
  //       codeSnippet_3,
  //     }))
  //   );
  // }, []);

  return (
    <ThemeContext.Provider value={{ themeData, setThemeData }}>
      <div className="App">
      <TopBar />
      <div className="site__wrapper">

      <SideBar />
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
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
