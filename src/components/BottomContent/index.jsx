import React, { useState } from 'react'
import './styles.css'
import FrontEndDeveloper from './BottomContentFunctions/FrontEndDeveloper'
import BackEndDeveloper from './BottomContentFunctions/BackEndDeveloper'
import ProjectManager from './BottomContentFunctions/ProjectManager'
import DataScientist from './BottomContentFunctions/DataScientist'
import DataAnalyst from './BottomContentFunctions/DataAnalyst'
import ItSupport from './BottomContentFunctions/ItSupport'

export function BottomContent() {
  const [selectedButton, setSelectedButton] = useState('projectManager')

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId)
  }
  const contentComponents = {
    projectManager: <ProjectManager />,
    dataAnalyst: <DataAnalyst />,
    itSupport: <ItSupport />,
    dataScientist: <DataScientist />,
    frontEndDeveloper: <FrontEndDeveloper />,
    backEndDeveloper: <BackEndDeveloper />
  }
  
  const selectedComponent = contentComponents[selectedButton]

  return (
    <div className="BottomContentMain">
      <div className="BottomContentTitle">
        <h3 className="BottomContentTitleH3">Do it smartly. Do it with AmazingCompany</h3>
        <a className="BottomContentTitleA">Learn more</a>
      </div>
      <div className="containerItemSelector">
        <button
          className={`buttonBottomContentGeneric ${selectedButton === 'projectManager' ? 'selected' : ''}`}
          type="button"
          role="tab"
          id="projectManager"
          onClick={() => handleButtonClick('projectManager')}
        >
          <span>Project Manager</span>
        </button>
        <button
          className={`buttonBottomContentGeneric ${selectedButton === 'dataAnalyst' ? 'selected' : ''}`}
          type="button"
          role="tab"
          id="dataAnalyst"
          onClick={() => handleButtonClick('dataAnalyst')}
        >
          <span>Data Analyst</span>
        </button>
        <button
          className={`buttonBottomContentGeneric ${selectedButton === 'itSupport' ? 'selected' : ''}`}
          type="button"
          role="tab"
          id="itSupport"
          onClick={() => handleButtonClick('itSupport')}
        >
          <span>IT Support</span>
        </button>
        <button
          className={`buttonBottomContentGeneric ${selectedButton === 'dataScientist' ? 'selected' : ''}`}
          type="button"
          role="tab"
          id="dataScientist"
          onClick={() => handleButtonClick('dataScientist')}
          >
            <span>Data Scientist</span>
        </button>
        <button
          className={`buttonBottomContentGeneric ${selectedButton === 'frontEndDeveloper' ? 'selected' : ''}`}
          type="button"
          role="tab"
          id="frontEndDeveloper"
          onClick={() => handleButtonClick('frontEndDeveloper')} 
          >
            <span>Front-End Developer</span>
        </button>
        <button
          className={`buttonBottomContentGeneric ${selectedButton === 'backEndDeveloper' ? 'selected' : ''}`}
          type="button"
          role="tab"
          id="backEndDeveloper"
          onClick={() => handleButtonClick('backEndDeveloper')}
          >
            <span>Back-End Developer</span>
        </button>
      </div>
      {selectedComponent}
    </div>
  )
}

export default BottomContent