import React from 'react'
import '../Stylesheets/Home.css';
import HomeImg from '../Assets/HomeImg.svg';

const Home = () => {
  return (
    <div id='gdgContent'>
      <p id='gdgTitle'>
        <span className='gdgTitleBlue'>G</span>
        <span className='gdgTitleRed'>o</span>
        <span className='gdgTitleYellow'>o</span>
        <span className='gdgTitleBlue'>g</span>
        <span className='gdgTitleGreen'>l</span>
        <span className='gdgTitleRed'>e </span>
        Developers Groups
      </p>
      <p id='rbuChapter'>RBU Chapter</p>
      <img src={HomeImg} id='HomeImg' alt='HomeImg'></img>
      <p id='gdgAbout'>Google Developer Groups are community groups for college and university students interested in Google developer technologies.</p>
    </div>
  )
}

export default Home
