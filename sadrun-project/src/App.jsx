import React from "react";
import QA from "./components/Q&A/QA";
import ServiceCard from "./components/ServiceCart/ServiceCard";
import Navigation from "./components/navigation/Navigation";
import LeftSideNaviigation from './components/leftSideNavigation/LeftSideNavigation'
import SearchInput from './components/leftSideNavigation/SearchInput/SearchInput'
function App() {
  return <div className="App">
    <Navigation />
    {/* <LeftSideNaviigation /> */}
    {/* <SearchInput /> */}
  </div>;
}

export default App;
