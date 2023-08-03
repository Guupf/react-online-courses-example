import React, { useState } from 'react'
import CSCard1logo from '../../assets/icon/CSCard1logo.jpg'
import CardCS1img from '../../assets/icon/CardCS1img.png'
import CardMD1img from '../../assets/icon/CardMD1img.jpg'
import './styles.css'

function CardLinkCS({ imgSrc, logoSrc, title, university }) {
  return (
    <a className="baseCardCS1" href="#">
      <div className="divImgCSCard1">
        <img className="imgCSCard1" src={imgSrc} alt="" />
        <img className="logoCSCard1" src={logoSrc} alt="" />
      </div>
      <div className="headerCSCard1">
        <span>{title}</span>
        <span>by: {university}</span>
      </div>
      <div className="BadgeCSCard1">
        <span>Course</span>
      </div>
    </a>
  )
}

function CardLinkMD({ imgSrc, logoSrc, title, university }) {
  return (
    <a className="baseCardMD1" href="#">
      <div className="divImgMDCard1">
        <img className="imgMDCard1" src={imgSrc} alt="" />
        <img className="logoMDCard1" src={logoSrc} alt="" />
      </div>
      <div className="headerCSCard1">
        <span>{title}</span>
        <span>by: {university}</span>
      </div>
      <div className="BadgeCSCard1">
        <span>Course</span>
      </div>
    </a>
  )
}

function ExploreMoreButton({ text, className }) {
  return (
    <div className="ExploreMoreButton">
      <button className={className}>
        <span>{text}</span>
      </button>
    </div>
  )
}

export function NewOn() {
  const [csEducationActive, setCsEducationActive] = useState(false)
  const [mastersDegreesActive, setMastersDegreesActive] = useState(false)

  const toggleCsEducation = () => {
    setCsEducationActive(!csEducationActive)
    setMastersDegreesActive(false)
  }

  const toggleMastersDegrees = () => {
    setMastersDegreesActive(!mastersDegreesActive)
    setCsEducationActive(false)
  }

  return (
    <div className="newOnContent">
      <div className="H2Wrapper">
        <h2 className="displayH2">
          {' '}
          <span className="emphasized">New</span> on amazingCompany
        </h2>
      </div>
      <div className="buttonsCourses">
       <div id="buttonWrapper">
        <div className="buttons">
          <button
            id="computerScienceEducationBtn"
            role="tab"
            type="button"
            aria-controls="CSEd"
            className={csEducationActive ? 'active' : ''}
            onClick={toggleCsEducation}
          >
            <span>Computer Science Education</span>
          </button>
          <button
            id="mastersDegreesBtn"
            role="tab"
            type="button"
            aria-controls="MDes"
            className={mastersDegreesActive ? 'active' : ''}
            onClick={toggleMastersDegrees}
          >
            <span>Master's Degrees</span>
          </button>
          </div>
          <div className="courseButtonContainer">

          <div id="CSEd" className={csEducationActive ? 'show' : ''}>
            <ul className="cardContainer">
              <li>
                <CardLinkCS
                  imgSrc={CardCS1img}
                  logoSrc={CSCard1logo}
                  title="Introduction to Machine Learning and Artificial Intelligence"
                  university="ExampleUniversity"
                />
                <CardLinkCS
                  imgSrc={CardCS1img}
                  logoSrc={CSCard1logo}
                  title="Introduction to Machine Learning and Artificial Intelligence"
                  university="ExampleUniversity"
                />
                <CardLinkCS
                  imgSrc={CardCS1img}
                  logoSrc={CSCard1logo}
                  title="Introduction to Machine Learning and Artificial Intelligence"
                  university="ExampleUniversity"
                />
              </li>
            </ul>
            <ExploreMoreButton
              text="Explore more Computer Engineering courses"
              className="ButtonCSEd"
            />
          </div>
        </div>
        <div id="MastersDegrees">
          <div id="MDes" className={mastersDegreesActive ? 'show' : ''}>
            <ul className="cardContainer">
              <li>
                <CardLinkMD
                  imgSrc={CardMD1img}
                  logoSrc={CSCard1logo}
                  title="A guide to get the perfect Master's Degree"
                  university="ExampleUniversity"
                />
                <CardLinkMD
                  imgSrc={CardMD1img}
                  logoSrc={CSCard1logo}
                  title="A guide to get the perfect Master's Degree"
                  university="ExampleUniversity"
                />
                <CardLinkMD
                  imgSrc={CardMD1img}
                  logoSrc={CSCard1logo}
                  title="A guide to get the perfect Master's Degree"
                  university="ExampleUniversity"
                />
              </li>
            </ul>
            <ExploreMoreButton
              text="Explore more Master's Degrees"
              className="ButtonMDes"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
