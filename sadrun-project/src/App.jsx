import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginnedNavigation from "./components/LoginnedNavigation/LoginnedNavigation";
import DesktopModeNav from "./components/LoginnedNavigation/DesktopModeNav/DesktopModeNav";
import SmallNavSideMenu from "./components/LoginnedNavigation/DesktopModeNav/LoginnedLeftSideNav/SmallNavSideMenu/SmallNavSideMenu";
function App() {
  return (
    <div className="App">
      {/* <LoginnedNavigation /> */}
      <DesktopModeNav />
      {/* <SmallNavSideMenu /> */}
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
