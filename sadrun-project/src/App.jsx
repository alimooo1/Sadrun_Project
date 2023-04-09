import React from "react";
import QA from "./components/Q&A/QA";
import BoxyCard from "./components/Blog-Cards/Boxy-Cards/Boxy-Card/BoxyCard";
import Picture from "./components/Blog-Cards/Boxy-Cards/images/nest.png";

function App() {
  return (
    <div className="App">
      <BoxyCard
        imageSRC={Picture}
        title={"نست"}
        description={"آموزشگاه در تدارک دوره های جدید برنامه نویسی است."}
        category={"آموزشی"}
      />
      ُ
    </div>
  );
}

export default App;
