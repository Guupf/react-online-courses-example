import React from 'react'
import certificate1 from '../../../assets/icon/certificate1.png'
import certificate2 from '../../../assets/icon/certificate2.jpg'
import examplePerson from '../../../assets/icon/example1.jpg'

function CertificatesProjectPlanner ({ imgSrc, title, content }) {
  return (
    <a className="baseCertificate" href="#">
      <div className="certificateImage">
        <img className="imgCertificate" src={imgSrc} alt="" />
      </div>
      <div className="headerCertificate">
        <span>{title}</span>
        <span>{content}</span>
      </div>
    </a>
  )
}

function dataAnalyst() {
  return(
  <div className="itemContainerProjectPlanner">
  <div className="itemContainerTitle">
    <h3 className="ProjectPlannerTitleH3Bot">Data Analyst</h3>
    <p className="ProjectPLannerPBot">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div className="certificates">
      <CertificatesProjectPlanner 
      imgSrc={certificate1}
      title={"Certificate Number 1:"}
      content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
      />
      <CertificatesProjectPlanner 
      imgSrc={certificate2}
      title={"Certificate Number 2:"}
      content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
      />
    </div>
  </div>
  <div className="mainContentProjectPlanner">
    <div className="mainContentTop">
      <h4>Initial salary</h4>
      <div className="graph1Wrapper">
        <div className="graph1"><div className="graph1Span">filler</div></div>
        <div className="graph1Salary">US$9.999.999</div>
      </div>
      <div className="graph2Wrapper">
        <div className="graph2"><div className="graph2Span">filler</div></div>
        <div className="graph2Salary">US$39.999.996</div>
      </div>
    </div>
    <div className="additionalInformation">
      <p>Job Offers: 0*</p>
      <p>10 year growth forecast: +0.001%*</p>
    </div>
    <div className="containerExamplePerson">
      <div className="divContainerExamplePerson">
        <img className="imgContainerExamplePerson" src={examplePerson} alt="image" />
      </div>
      <div className="containerCertificateSpan">
        <span>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptas excepturi amet repudiandae necessitatibus, nemo."</span>
        <div className="quoteContainer">
          - John Doe
        </div>
      </div>
    </div>
  </div>
</div>
)
}

export default dataAnalyst