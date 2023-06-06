import { useRef } from "react";
import calendar from "../../assets/SVGs/images/calendar.png";
import "./DateInput.css";
import styles from './styles.module.scss'
// import "react-datepicker/dist/react-datepicker.css";

const DateInput = (props) => {
  const ref = useRef();

  return (
    <div
      className={styles.parent_div}
      onClick={() => {
        ref.current.type = "date";
        ref.current.showPicker();
      }}
    >
      <img
        src={calendar}
        alt="calendar icon"
        className={styles.img}
      />
      <input
        placeholder={props.placeholder}
        className={styles.input}
        type="text"
        ref={ref}
        onChange={(e) => console.log(e.target.value)}
        onBlur={() => (ref.current.type = "text")}
      />
      <div className={styles.div_footer}>
        <span className={styles.span_footer}></span>
      </div>
    </div>
  );
};

export default DateInput;
