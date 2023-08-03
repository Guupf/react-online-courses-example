import './styles.css'

export function Footer() {
  return (
    <footer>
      <div className="footerContent">
        <div className="FooterListsAbout">
         <div className="listFooter" id="Company">
           <ul>
             <li>
               <p>Company</p>
               <a href="#">About</a>
               <a href="#">Mission</a>
               <a href="#">Services</a>
               <a href="#">Social</a>
               <a href="#">Get in touch</a>
             </li>
           </ul>
         </div>
         <div className="listFooter" id="Products">
           <ul>
             <li>
               <p>Products</p>
               <a href="#">Learn more</a>
               <a href="#">Pricing</a>
               <a href="#">Subscriptions</a>
               <a href="#">FAQ</a>
             </li>
           </ul>
         </div>
         <div className="listFooter" id="Accounts">
           <ul>
             <li>
               <p>Products</p>
               <a href="#">Learn more</a>
               <a href="#">Pricing</a>
               <a href="#">Subscriptions</a>
               <a href="#">FAQ</a>
             </li>
           </ul>
         </div>
         <div className="listFooter" id="Resources">
           <ul>
             <li>
               <p>Resources</p>
               <a href="#">Webmail</a>
               <a href="#">Redeem Code</a>
             </li>
           </ul>
         </div>
         <div className="listFooter" id="Support">
           <ul>
             <li>
               <p>Support</p>
               <a href="#">Contact us</a>
               <a href="#">Webchat</a>
               <a href="#">Open ticket</a>
             </li>
           </ul>
         </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer