import React from "react";
import QA from "./components/Q&A/QA";
import BoxyCard from "./components/Blog-Cards/Boxy-Cards/Boxy-Card/BoxyCard";
import BoxyPicture from "./components/Blog-Cards/Boxy-Cards/images/nest.png";
import RowCard from "./components/Blog-Cards/Row-Cards/Row-Card/RowCard";
import RowPicture from "./components/Blog-Cards/Row-Cards/images/nest.png";

function App() {
  return (
    <div className="App">
      <BoxyCard
        imageSRC={BoxyPicture}
        title={"نست "}
        description={"آموزشگاه در تدارک دوره های جدید برنامه نویسی است."}
        category={"آموزشی"}
      />
      <RowCard
        imageSRC={RowPicture}
        title={"نست جی اس"}
        details={
          "آموزشگاه در تدارک دوره های جدید برنامه نویسی است. آموزشگاه در تدارک دوره های جدید برنامه نویسی است. آموزشگاه در تدارک دوره های جدید برنامه نویسی است."
        }
        category={"آموزشی"}
      />
    </div>
  );
}

export default App;
