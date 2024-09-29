import React from 'react'
import '../Stylesheets/Technologies.css';
import AndroidTech from '../Assets/Technologies/AndroidTech.svg';
import FlutterTech from '../Assets/Technologies/FlutterTech.svg';
import CloudTech from '../Assets/Technologies/CloudTech.svg';
import DownArrow from '../Assets/Technologies/DownArrow.svg';

const Technologies = () => {
  return (
    <div>
      <div id='TechTitle'>
        <hr/>
        <p id='Technologies'>Technologies</p>
        <hr/>
      </div>
      <p id='TechSubTitle'>Domains That Excite Us to Collaborate and Teach!</p>
      <div id='TechCards'>
        <div className='TechCard' id='Android'>
            <hr/>
            <div className='TechCardBox'>
                <img src={AndroidTech} className='TechImg' alt='Android'></img>
                <p>Android</p>
                <img src={DownArrow} className='DownArrow' alt='Arrow'></img>
            </div>
        </div>
        <div className='TechCard' id='Flutter'>
            <hr/>
            <div className='TechCardBox'>
                <img src={FlutterTech} className='TechImg' alt='Flutter'></img>
                <p>Flutter</p>
                <img src={DownArrow} className='DownArrow' alt='Arrow'></img>
            </div>
        </div>
        <div className='TechCard' id='Cloud'>
            <hr/>
            <div className='TechCardBox'>
                <img src={CloudTech} className='TechImg' alt='Cloud'></img>
                <p>Cloud</p>
                <img src={DownArrow} className='DownArrow' alt='Arrow'></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
