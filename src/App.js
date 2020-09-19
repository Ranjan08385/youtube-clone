import React from "react";
import "./App.css";
import Header from "./header/Header";
import Sidebar from "./Sidebar/Sidebar";
import RecmVideos from "./RecommendedVideos/RecmVideos";
import SearchPage from "./searchPage/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="app__page">
              <Sidebar />
              <RecmVideos />
            </div>
          </Route>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
