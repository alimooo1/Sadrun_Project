import React from 'react'
import styles from "./LandingLayout.module.scss"
import LandingPage from "../../components/LandingPage/LandingPage"
import Services from "../../components/ServiceCart/ServiceCard"
import Categories from "../../components/CategoryCard/CategoryCard"
import Courses from "../../components/Main-page-courses/MPCourses"

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
        <section className={styles.category}>
          <Categories />
        </section>
        <section className={styles.courses}>
          <Courses />
        </section>
      </main>
    </div>
  )
}
