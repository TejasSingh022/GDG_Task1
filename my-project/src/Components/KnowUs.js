import React from 'react';
import Arrow1 from '../Assets/KnowUs/Arrow1.svg';
import Arrow2 from '../Assets/KnowUs/Arrow2.svg';
import Arrow3 from '../Assets/KnowUs/Arrow3.svg';
import Mission from '../Assets/KnowUs/Mission.svg';
import Mission2 from '../Assets/KnowUs/Mission2.svg';
import Perspective from '../Assets/KnowUs/Perspective.svg';
import Perspective2 from '../Assets/KnowUs/Perspective2.svg';
import KeepsUsGoing from '../Assets/KnowUs/KeepsUsGoing.svg';
import KeepsUsGoing2 from '../Assets/KnowUs/KeepsUsGoing2.svg';
import Circle from '../Assets/KnowUs/Circle.svg';
import '../Stylesheets/KnowUs.css';

const KnowUs = () => {
  return (
    <div id='KnowUs'>
        <button id="KnowUsJoin">JOIN US</button>
        <div id="KnowUsArrowSVG">
            <img src={Arrow1} className='KnowUsArrows' alt='Arrow'></img>
            <img src={Arrow2} className='KnowUsArrows' alt='Arrow'></img>
            <img src={Arrow3} className='KnowUsArrows' alt='Arrow'></img>
        </div>
        <p id="GetToKnowUs">Get to Know Us!</p>
        <div className="KnowUsCard" id='Mission'>
            <p className='KnowUsTitle'>Our Mission</p>
            <hr className='KnowUsLine'/>
            <div className='CardContent'>
                <img src={Mission} className='CardImage' alt='Mission'></img>
                <p className='KnowUsContent'>Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.</p>
                <img src={Mission2} className='CardOutline' alt='Outline'></img>
            </div>
        </div>
        <div className="KnowUsCard" id='Perspective'>
            <p className='KnowUsTitle'>Our Perspective</p>
            <hr className='KnowUsLine'/>
            <div className='CardContent'>
                <img src={Perspective2} className='CardOutline' alt='Outline'></img>
                <p className='KnowUsContent'>We’re a community-driven initiative aiming to bridge the gap between research and practice , develop evolutionary thinking and network throughout the process. We believe in connecting fellow developers , spreading stimulative ideas and working for a solution driven team.</p>
                <img src={Perspective} className='CardImage' alt='Perspective'></img>
            </div>
        </div>
        <div className="KnowUsCard" id='KeepsUsGoing'>
            <p className='KnowUsTitle'>What Keeps Us Going?</p>
            <hr className='KnowUsLine'/>
            <div className='CardContent'>
                <img src={KeepsUsGoing} className='CardImage' alt='KeepsUsGoing'></img>
                <p className='KnowUsContent'>Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights.
                <br/>
                The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.</p>
                <img src={KeepsUsGoing2} className='CardOutline' alt='Outline'></img>
            </div>
        </div>
        
        <div id='Records'>
            <div className='Record'>
                <div className='RecordNumber' id='Record1'>
                    <img src={Circle} alt='circle' className='circle'></img>
                    <p>03+</p>
                </div>
                <p className='RecordName'>Years</p>
            </div>
            <div className='Record'>
                <div className='RecordNumber' id='Record2'>
                    <img src={Circle} alt='circle' className='circle'></img>
                    <p>10+</p>
                </div>
                <p className='RecordName'>Events</p>
            </div>
            <div className='Record'>
                <div className='RecordNumber' id='Record3'>
                    <img src={Circle} alt='circle' className='circle'></img>
                    <p>1K+</p>
                </div>
                <p className='RecordName'>Community Members</p>
            </div>
            <div className='Record'>
                <div className='RecordNumber' id='Record4'>
                    <img src={Circle} alt='circle' className='circle'></img>
                    <p>200+</p>
                </div>
                <p className='RecordName'>Attendees</p>
            </div>
        </div>
    </div>
  )
}

export default KnowUs
