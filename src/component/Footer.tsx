import React from "react";


const Footer = () => {
    return <div className="pg-footer">
    <footer className="footer">
      <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div className="footer-content">
        <div className="footer-content-column">
          <div className="footer-logo">
            <a className="footer-logo-link" href="/">
              <h1>Plogging</h1>
            </a>
          </div>
          <div className="footer-menu">
            <h2 className="footer-menu-name"> Get Started</h2>
            <ul id="menu-get-started" className="footer-menu-list">
              <li className="menu-item menu-item-type-post_type menu-item-object-product">
                <a href="https://spiky-shoulder-7b9.notion.site/ToyProject-plogging-79a4abfa703344dd95726f215f279ec0?pvs=4">Start</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-product">
                <a href="https://spiky-shoulder-7b9.notion.site/49b533dd63364e779898983cb4d9133d?pvs=4">Documentation</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-product">
                <a href="/preparing">Installation</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content-column">
          <div className="footer-menu">
            <h2 className="footer-menu-name"> Company</h2>
            <ul id="menu-company" className="footer-menu-list">
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/preparing">Contact</a>
              </li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                <a href="/preparing">News</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/preparing">Careers</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h2 className="footer-menu-name"> Legal</h2>
            <ul id="menu-legal" className="footer-menu-list">
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                <a href="/preparing">Privacy Notice</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/preparing">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content-column">
          <div className="footer-menu">
            <h2 className="footer-menu-name"> Quick Links</h2>
            <ul id="menu-quick-links" className="footer-menu-list">
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="/notice">공지사항</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/donate">후원하기</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content-column">
          <div className="footer-call-to-action">
            <h2 className="footer-call-to-action-title"> Let's Chat</h2>
            <p className="footer-call-to-action-description"> Have a support question?</p>
            <a className="footer-call-to-action-button button" href="https://github.com/franjisca" target="_self"> Get in Touch </a>
          </div>
          <div className="footer-call-to-action">
            <h2 className="footer-call-to-action-title"> Email</h2>
            <p className="footer-call-to-action-link-wrapper"> <a className="footer-call-to-action-link" href="mailto:publicjy324@gmail.com" target="_self"> hanj1yeon@naver.com </a></p>
          </div>
        </div>
        <div className="footer-social-links"> 
        <svg className="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
            <path className="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
          </svg>
          <a className="footer-social-link github" href="https://github.com/franjisca/plogging_toy_front" target="_blank" rel="noreferrer">
            <span className="hidden-link-text">Github</span>
            <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path className="footer-social-icon-path" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z "></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="footer-copyright-wrapper">
          <p className="footer-copyright-text">
            <a className="footer-copyright-link" href="https://github.com/franjisca" target="_self"> ©2023. | Made by J1yeon. | All rights reserved. </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
}

export default Footer;