import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-content">
        <h2>Education & Acknowledgements</h2>
        <div className="education-container">
          <div className="education-category">
            <h3>Academic Credentials</h3>
            <div className="credential-item">
              <div className="credential-header">
                <h4>Mobile Application Development & Strategy · Graduate Certificate</h4>
                <span className="credential-date">Sep 2025 – Nov 2026</span>
              </div>
              <p className="credential-institution">George Brown College · Toronto, ON</p>
              <ul className="detail-list">
                <li>
                  Developed native iOS applications using Swift with MVC/MVVM architecture while
                  meeting Apple Human Interface Guidelines.
                </li>
                <li>
                  Built an AI-powered pneumonia diagnosis app that combines Core ML with a
                  pre-trained CNN model for X-ray analysis.
                </li>
                <li>
                  Led collaborative sprints to ship cross-platform mobile solutions with seamless API
                  integration and functionality.
                </li>
              </ul>
            </div>

            <div className="credential-item">
              <div className="credential-header">
                <h4>B.Sc. (Hons) in Computing</h4>
                <span className="credential-date">Dec 2022</span>
              </div>
              <p className="credential-institution">London Metropolitan University · London, UK</p>
              <ul className="detail-list">
                <li>
                  Used design tools to create wireframes, mock-ups, and prototypes that improved user
                  experience and accessibility.
                </li>
              </ul>
            </div>
          </div>

          <div className="education-category">
            <h3>Volunteer Experience</h3>
            <div className="experience-entry">
              <div className="experience-header">
                <h4>Workshop Presenter</h4>
                <span>Aug 2024 – Sep 2024</span>
              </div>
              <p className="experience-institution">Futerama · Ing Skill, Kathmandu</p>
              <ul className="detail-list">
                <li>
                  Presented modern mobile technologies to 3,000+ students through interactive
                  workshops nationwide.
                </li>
                <li>
                  Translated complex engineering concepts into approachable demonstrations for
                  diverse audiences.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

