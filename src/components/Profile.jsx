import React from 'react'
import './Profile.css'

const Profile = () => {
    const heroImage = `${import.meta.env.BASE_URL}hero-illustration.png`

  const downloadResume = () => {
    const link = document.createElement('a')
    // Use import.meta.env.BASE_URL here too
    link.href = `${import.meta.env.BASE_URL}resume.pdf`
    link.download = 'Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="profile" className="profile-section">
      <div className="profile-content">
        <div className="hero-layout">
          <div className="hero-illustration">
            <img src={heroImage} alt="Creating iOS experiences" loading="lazy" />
          </div>
            <div className="hero-copy">
            <p className="eyebrow">Hello there, I'm Bibek</p>
            <h1>Mobile Developer & UI/UX Designer</h1>
            <p>
            Delivering highly polished, performant mobile apps. My full-stack mobile development ensures that applications are robust and feel smooth and intuitive to the user. I specialize in building thoughtful tools that maximize team efficiency and user satisfaction. Currently completing my studies and focusing on next-generation mobile tooling.
            </p>
            <div className="hero-actions">
              <button className="hero-resume-button" onClick={downloadResume}>
                <span className="button-icon">↓</span>
                <span className="button-text">Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile

