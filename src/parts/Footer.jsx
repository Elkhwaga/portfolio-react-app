import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo1.png';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

import '../assets/styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row d-flex">
          <div className="col-3">
            <img src={Logo} alt="logo" />
            <p>
              Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Neque,
              ut. Amet odio deleniti eos excepturi.
            </p>
            <div className="social d-flex">
              <FacebookIcon className="facebook" />
              <InstagramIcon className="instagram" />
              <TwitterIcon className="twitter" />
              <YouTubeIcon className="youtube" />
              <PinterestIcon className="pinterest" />
            </div>
          </div>

          <div className="col-3">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">FAQ'S</Link>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <h4>Recent Post</h4>
            <div className="content">
              <div>
                <h5>3 WooCommerce Plugins to Boost Sales</h5>
                <span>28 Feb 2022</span>
              </div>

              <div>
                <h5>3 WooCommerce Plugins to Boost Sales</h5>
                <span>28 Feb 2022</span>
              </div>

              <div>
                <h5>3 WooCommerce Plugins to Boost Sales</h5>
                <span>28 Feb 2022</span>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="info">
              <h4>Get To Touch</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, eaque.
              </p>
              <div className="d-flex align-items-center">
                <span>
                  <PlaceIcon />
                </span>
                <h5>Location: 27 Division St. New York. NY 10002 USA</h5>
              </div>

              <div className="d-flex align-items-center">
                <span>
                  <PhoneIcon />
                </span>
                <h5>Phone: +123 456 789</h5>
              </div>

              <div className="d-flex align-items-center">
                <span>
                  <EmailIcon />
                </span>
                <h5>Email:support@gmail.com</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright @2022. All rights reserved. Design & Developed BY
            <strong>Mohamed Elkhwaga</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
