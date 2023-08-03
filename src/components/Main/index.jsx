import React from 'react'
import mainBackground from '../../assets/icon/mainBackground.jpg'
import './styles.css'
import './mainCssAttributes.css'

function Main() {
  return (
    <main>
      <div className="mainContent">
        <img id="mainBackground" src={mainBackground} alt="Main Background" />
        <div className="mainElementsTop">
          <h1>Fuel your ambition</h1>
          <div className="SearchBarDivMain">
            <input
              className="SearchBarMain"
              type="text"
              id="inputSearchBar"
              autoComplete="off"
              placeholder="Search more courses"
              dir="auto"
            />
            <button type="submit" className="submitBtn">
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
