import { useState } from "react";
import styles from "./TableDashboard.module.scss";
import TableRow from "./TableRow/TableRow";
import courseImage from "./images/testImage.svg";
import { FaSistrix } from "react-icons/fa";
const TableDashboard = () => {
  // Creating a state variable called searchQuery and a function to update it
  const [searchQuery, setSearchQuery] = useState("");

  // courses data array
  const courses = [
    {
      id: Math.floor(Math.random()),
      src: courseImage,
      courseName: "maryam",
      courseMentorsName: "mahsa",
      courseSeasonName: "bahar",
      courseStartDate: "today",
      courseEndDate: "tomorrow",
      coursePrice: "5000",
    },
    {
      id: Math.floor(Math.random()),
      src: courseImage,
      courseName: "sara",
      courseMentorsName: "ali",
      courseSeasonName: "bahar",
      courseStartDate: "today",
      courseEndDate: "tomorrow",
      coursePrice: "5000",
    },
    {
      id: Math.floor(Math.random()),
      src: courseImage,
      courseName: "maryam",
      courseMentorsName: "neda",
      courseSeasonName: "bahar",
      courseStartDate: "today",
      courseEndDate: "tomorrow",
      coursePrice: "5000",
    },
    {
      id: Math.floor(Math.random()),
      src: courseImage,
      courseName: "maryam",
      courseMentorsName: "ali",
      courseSeasonName: "bahar",
      courseStartDate: "today",
      courseEndDate: "tomorrow",
      coursePrice: "5000",
    },
    {
      id: Math.floor(Math.random()),
      src: courseImage,
      courseName: "sara",
      courseMentorsName: "ali",
      courseSeasonName: "bahar",
      courseStartDate: "today",
      courseEndDate: "tomorrow",
      coursePrice: "5000",
    },
    {
      id: Math.floor(Math.random()),
      src: courseImage,
      courseName: "kati",
      courseMentorsName: "reza",
      courseSeasonName: "tabestan",
      courseStartDate: "today",
      courseEndDate: "tomorrow",
      coursePrice: "5000",
    },
  ];

  // Filtering the courses array
  const filteredCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  //
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className={styles.Countainer}>
      <div className={styles.tableHeader}>
        <div className={styles.registeredCourseNumbers}>
          <span>دوره های ثبت شده: 26 تا 39 </span>
        </div>
        <div className={styles.inputSearchCountainer}>
          <span className={styles.icon}>
            <FaSistrix />
          </span>
          <input
            type="search"
            placeholder="جست و جو "
            className={styles.input}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className={styles.tableCountainer}>
        {/*table row title */}
        <div className={styles.tablrRowTitle}>
          <ul className={styles.courseItemsTitle}>
            <li></li>
            <li>نام دوره </li>
            <li>نام استاد</li>
            <li>نام ترم </li>
            <li>تاریخ شروع</li>
            <li>تاریخ پایان</li>
            <li>قیمت </li>
          </ul>
        </div>

        {/* Mapping  the filteredCourses array */}
        {filteredCourses.length > 0 ? (
          filteredCourses.map((courseItem) => {
            return (
              <TableRow
                className={styles.courseItems}
                key={courseItem.id}
                courseImage={courseItem.src}
                courseName={courseItem.courseName}
                courseMentorsName={courseItem.courseMentorsName}
                courseSeasonName={courseItem.courseSeasonName}
                courseStartDate={courseItem.courseStartDate}
                courseEndDate={courseItem.courseEndDate}
                coursePrice={courseItem.coursePrice}
              />
            );
          })
        ) : (
          <p className={styles.notFoundText}>دوره درسی موردنظر یافت نشد !</p>
        )}
      </div>
    </div>
  );
};

export default TableDashboard;
