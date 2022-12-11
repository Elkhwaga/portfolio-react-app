import React from 'react';
import Home from '../assets/images/home.png';

import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

import '../assets/styles/header.css';

const Header = () => {
  return (
    <header className="vh-100">
      <div className="row d-flex align-items-center h-100">
        <div className="col-6 h-100">
          <img src={Home} alt="" className="img-fluid h-100" />
        </div>
        <div className="col-6">
          <h1 className="text-uppercase">
            I Am
            <br />
            Web Designer
          </h1>
          <div className="social d-flex">
            <FacebookIcon className="facebook" />
            <InstagramIcon className="instagram" />
            <TwitterIcon className="twitter" />
            <YouTubeIcon className="youtube" />
            <PinterestIcon className="pinterest" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quo
            adipisci iusto ipsum sunt molestias temporibus quasi reiciendis
            atque sapiente nisi cumque dicta officiis odio, soluta laudantium
            facere recusandae repudiandae?
          </p>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
