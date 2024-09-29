import React from 'react'
import Logo from '../Assets/Logo.svg';
import LocationIcon from '../Assets/Footer/LocationIcon.svg';
import EmailIcon from '../Assets/Footer/EmailIcon.svg';
import InstagramIcon from '../Assets/Footer/InstagramIcon.svg';
import LinkedinIcon from '../Assets/Footer/LinkedinIcon.svg';
import TwitterIcon from '../Assets/Footer/TwitterIcon.svg';
import FooterSVG from '../Assets/Footer/Footer.svg';
import '../Stylesheets/Footer.css';

const Footer = () => {
  return (
    <>
        <div id='Footer'>
            <div id='FooterLogo'>
                <img src={Logo} id='FooterLogoImg' alt='GDG Logo'></img>
                <p id='FooterLogoTitle'>Google Developers Groups</p>
                <p><span id='FooterOnCampus'>On Campus</span>
                    <ul><li>Ramdeobaba University</li></ul>
                </p>
            </div>
            <div id='FooterVerticalLine'></div>
            <div id='FooterContacts'>
                <div id='FooterLocation'>
                    <div className='FooterContainer'>
                        <img src={LocationIcon} id='LocationIcon' alt='Location'></img>
                    </div>
                    <p>Shri Ramdeobaba College of Engineering and Management, Ramdeo Tekdi, Gittikhadan,Katol Road,Nagpur- 440013</p>
                </div>
                <div id='FooterContact'>
                    <div id='FooterEmail'>
                        <div className='FooterContainer'>
                            <img src={EmailIcon} id='EmailIcon' alt='Email'></img>
                        </div>
                        <p>dsc.rknec@gmail.com</p>
                    </div>
                    <div id='FooterSocials'>
                        <p>Follow Us: </p>
                        <div id='FooterSocialIcons'>
                            <div className='FooterContainer'><img src={InstagramIcon} id='InstagramIcon' alt='Instagram'></img></div>
                            <div className='FooterContainer'><img src={LinkedinIcon} id='LinkedinIcon' alt='Linkedin'></img></div>
                            <div className='FooterContainer'><img src={TwitterIcon} id='TwitterIcon' alt='Twitter'></img></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src={FooterSVG} id='FooterSVG' alt='FooterSVG'></img>
    </>
  )
}

export default Footer
