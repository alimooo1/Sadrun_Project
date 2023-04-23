import React from 'react'
import styles from "./LandingLayout.module.scss"
import LandingPage from "../../components/LandingPage/LandingPage"
import Services from "../../components/ServiceCart/ServiceCard"
import Categories from "../../components/CategoryCard/CategoryCard"
import Courses from "../../components/Main-page-courses/MPCourses"
import Teachers from "../../components/TeacherCard/TeacherCard"
import Articles from "../../components/Article-Card/ArticleCard"
import QA from "../../components/Q&A/QA"
import Footer from "../../components/Map-Footer/MapFooter"

export default function LandingLayout() {
  return (
    <div className={styles.container}>
      <main>
        <section className={styles.landing}>
          <LandingPage />
        </section>
        <section className={styles.services}>
          <Services />
        </section>
        <section className={styles.categories}>
          <Categories />
        </section>
        <section className={styles.courses}>
          <Courses />
        </section>
        <section className={styles.teachers}>
          <Teachers />
        </section>
        <section className={styles.articles}>
          <Articles />
        </section>
        <section className={styles.QA}>
          <QA />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
