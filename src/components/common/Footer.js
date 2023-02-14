import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer">
        <div className="inner">
          <div className="footerTop">
            <div className="footerLogo">
              <h1 className="logo">
                <Link className="logoText" to="/">
                  <span className="logoTitle">SHIN YUMI</span>
                  <span className="logoSub">Front-end Developer</span>
                </Link>
              </h1>
            </div>
            <div className="footerContent">
              <div className="footerEmail">
                <h2 className="footerContTitle">Contact me</h2>
                <p className="emailText">
                  If you are interested in my portfolio, please email me!
                </p>
                <div className="contBtn">
                  <Link to="/contact" className="btnText">
                    view &nbsp; <span> contact</span>
                  </Link>
                </div>
              </div>
              <div className="footerSns">
                <h2 className="footerContTitle">Social</h2>
                <ul className="snsWrap">
                  <li className="snsList">
                    <Link className="snsLink" to="/">Instagram</Link>
                  </li>
                  <li className="snsList">
                    <Link className="snsLink" to="/">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="footerLine" />
          <div className="footerBottom">
            <div className="footerSocial">
              <Link className="footerLink" to="https://github.com/Shin-Yumi">github</Link>
              <Link className="footerLink"
                to="https://painted-snowshoe-84d.notion.site/Front-end-Developer-cc9e3c1e16d14137af7f0f6bdc8922a2">notion</Link>
              <Link className="footerLink" to="https://hafe-is-me.tistory.com/">tistory</Link>
            </div>
            <p className="copyright">Copyright © 2023 Yoom ALL Right reserved</p>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
