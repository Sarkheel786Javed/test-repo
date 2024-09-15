import { useState } from 'react'
import styles from './Aboutsus.module.css'
import Typewriter from '../TypeWriter/TypeWriter'



function About() {
  const [tab, setTab] = useState<any>("Experence")
  const handleSectionsTabs = (tab: any) => {
    setTab(tab)
  }

  let text = "Sarkheel, Javed"
  return (
    <div className="w-100 p-4">
      <div className={`p-5 ${styles.Aboutus_cover}`}>
        <div>
          <h1 className='text-center'>
            S
            <Typewriter clasName="fs-1 text-light" text="arkheel, Javed " delay={400} infinite size="" />
          </h1>
          <div className={`mt-5 ${styles.text_align}`}>
          Results-driven software Developer with expertise in React.js, Typescript,  MernStack, backend technologies. Skilled in UIdevelopment, API  integration,   and database management.Strong in unit testing, agile methodologies, Git, and Jira. Passionate about delivering high-quality software solutions.
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-center align-items-start mt-5">
          <div className={`${styles.buttons}`}>
            <div className={`${tab === "Education" ? styles.button_active : styles.button_Not_active}`}
              onClick={() => handleSectionsTabs("Education")}>Education</div>
            <div className={`${tab === "Experence" ? styles.button_active : styles.button_Not_active}`}
              onClick={() => handleSectionsTabs("Experence")}>Experiance</div>
          </div>
        </div>
        <div className="container-fluid">
          {tab === "Education" ? (
            <div className={`mt-5 ${styles.text_align}`}>
              <label className="fs-4 fw-bolder">
                EDUCATION
              </label>
              <br />
              <label className='fs-5mt-3'>
                Government Swedish Pakistani Collage of Technology, (GSPCT, Gujrat) — DAE
              </label>
              <br />
              <label className='fs-6 mt-2'>
                January 2017 - January 2020
              </label>
              <br />
              <label className='fs-6 mt-3'>
                Mechanical Specialized in Foundary Technology
                Called Mother of Technologies
              </label>
            </div>
          ) : (
            <div className={`mt-5 ${styles.text_align}`}>
              <span>
                <label className='fw-bolder fs-4'>
                  Working At KODWARE, Rawalpindi — Front-end +Backend in  MernStack
                </label>
                <br />
                <label className="mt-2 fw-bolder fs-5 mb-3">
                  October 2024, Present
                </label>
                <br />

                I'm a Front-end and Backend in MernStack, Developer, specializing in RESTful APIs and frontend development with React.js. I’ve worked on an online coaching platform, building key components using. NET, React.js, and Redux.
              </span>
              <br />
              <span>
                <label className='fw-bolder mt-5 fs-4'>PROJECTS</label>
                <br />
                <label className="fw-bold fs-5 my-4"> Master Quiz —</label>
                <br />

                QuizMaster Pro is an advanced timed  exam and quiz system designed to deliver personalized assessments for users. The platform dynamically generates random questions and answer choices for each participant, ensuring a unique experience every time. It includes a robust timed exam feature,   providing   an    accurate    measure  of performance   under time  constraints.The system is  ideal  for    educational      institutions, corporate  Training, and online learning platforms looking to offer secure and scalable  assessments
              </span>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default About