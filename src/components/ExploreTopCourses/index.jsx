import React, { useEffect } from "react";
import rightButton from '../../assets/icon/rightChevron.png'
import leftButton from '../../assets/icon/leftChevron.png'
import Design from '../../assets/icon/Design.png'
import SlfImp from '../../assets/icon/SlfImp.png'
import Bizns from '../../assets/icon/Bizns.png'
import Dev from '../../assets/icon/Dev.png'
import './styles.css'
import { useExploreTopCourses } from "./hooks/useExploreTopCourses";



export function ExploreTopCourses() {
  const {handleSwitchButton} = useExploreTopCourses()
  return (
    <div className="exploreTopCourses">
    <div className="h2BotWrapper">
      <h2>Explore top courses</h2>
    </div>
    <div className="container">
      <button className="arrowLeftControl" type="button" onClick={()=>handleSwitchButton("left")}>
        <img className="genericButtonImg" alt="" src={leftButton} />
      </button>
      <button className="arrowRightControl" type="button" onClick={()=>handleSwitchButton("right")}>
        <img className="genericButtonImg" alt="" src={rightButton} />
      </button>
      <div className="galleryWrapper">
        <div className="gallery">
          <ul className="ulTopCourses">
            <li className="liTopCourses">
              <a className="item" href="#">
                <div className="imgGalleryItem">
                <img className="imgItem" src={Design} alt="" loading="lazy" />
                </div>
                <div className="spanGalleryItem">
                  <span className="spanGalleryItem">Design</span>
                </div>
              </a>
              <a className="item" href="#">
                <div className="imgGalleryItem">
                <img className="imgItem" src={Bizns} alt="" loading="lazy" />
                </div>
                <div className="spanGalleryItem">
                  <span className="spanGalleryItem">Business</span>
                </div>
              </a>
              <a className="item" href="#">
                <div className="imgGalleryItem">
                <img className="imgItem" src={SlfImp} alt="" loading="lazy" />
                </div>
                <div className="spanGalleryItem">
                  <span className="spanGalleryItem">Self improvement</span>
                </div>
              </a>
              <a className="item" href="#">
                <div className="imgGalleryItem">
                <img className="imgItem" src={Dev} alt="" loading="lazy" />
                </div>
                <div className="spanGalleryItem">
                  <span className="spanGalleryItem">Dev</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}
