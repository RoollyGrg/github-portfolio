import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Swift', 'Objective-C', 'Dart', 'Kotlin', 'JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks & Architecture',
      skills: ['iOS SDK', 'UIKit', 'SwiftUI', 'Flutter', 'MVC', 'MVVM']
    },
    {
      title: 'Design & Research',
      skills: ['Figma', 'Sketch', 'Adobe XD', 'Wireframes', 'Prototyping', 'Usability Testing']
    },
    {
      title: 'Data & DevOps',
      skills: ['Core Data', 'Firebase', 'MongoDB', 'Git/GitHub', 'GitLab']
    }
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

