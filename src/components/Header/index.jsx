import React from 'react'
import CompanyLogo from '../../assets/icon/companyLogo.svg'
import './styles.css'

export function Header() {
  return (
    <div>
      <header>
        <div className="header1">
          <div className="brandLogo">
            <i className="adjustHeader1">
              AmazingCompany
              <img src={CompanyLogo} id="companyLogo" />
            </i>
          </div>
          <div className="primaryMenuBar">
            <ul className="primaryMenuUl">
              <li className="menuLink">
                <a className="menuItem" href="#">
                  Courses
                </a>
              </li>
              <li className="menuLink">
                <a className="menuItem" href="#">
                  Programs & Degrees
                </a>
              </li>
              <li className="menuItem">
                <a className="menuItem" href="#">
                  Schools & Partners
                </a>
              </li>
            </ul>
          </div>
          <div className="desktopSearchBar">
            <div className="SearchBarDivTop">
              <input
                className="SearchBarTop"
                type="text"
                id="inputSearchBar"
                autoComplete="off"
                placeholder="What do you want to learn?"
                dir="auto"
                spellCheck="false"
              ></input>
            </div>
          </div>
          <nav className="userActions">
            <a className="spanSignIn" href="#">Sign in</a>
            <a className="btnRegister" href="#"><div className="spanRegister">Register</div></a>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
