import React from "react";
import "../../sass/fonts.scss";
import styles from "./QA.module.scss";
import FormQA from "./Form-Q&A/FormQA";
import sectionPicture from "./images/CompositeLayer-mdpi.svg";

export default function QA() {
  return (
    <section className={styles.QA}>
      <div className={styles.sectionName}>پیشنهاد و انتقادات</div>
      <div className={styles.mainQA}>
        <img className={styles.QAPic} src={sectionPicture} />
        <FormQA />
      </div>
    </section>
  );
}
