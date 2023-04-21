import React from "react";
import CoursePrice from './components/Course_price/CoursePrice';

function App() {
  return <div className="App">
    <CoursePrice coursPrice={2498000} courseDiscount={2} date={"2024-00-00"}/>
  </div>;
}

export default App;
