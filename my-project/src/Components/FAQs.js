import React from 'react'
import '../Stylesheets/FAQs.css';
import RedDownArrow from'../Assets/FAQs/RedDownArrow.svg';
import BlueDownArrow from'../Assets/FAQs/BlueDownArrow.svg';
import GreenDownArrow from'../Assets/FAQs/GreenDownArrow.svg';
import YellowDownArrow from'../Assets/FAQs/YellowDownArrow.svg';

const FAQs = () => {
  return (
    <div>
      <p id='FAQsTitle'>FAQs</p>
      <div id='Questions'>
        <div className='Question' id='Q1'>
            <div className='QuestionBox'>
                <img src={RedDownArrow} className='QuestionArrow' alt='DownArrow'></img>
                <p>What is GDG?</p>
            </div>
            <div className='AnswerBoxOutline'>
                <div className='InnerAnswerBox'>
                    <div className='AnswerText'>
                    <p>Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='Question' id='Q2'>
            <div className='QuestionBox'>
                <img src={GreenDownArrow} className='QuestionArrow' alt='DownArrow'></img>
                <p>How can you become a part of GDG ?</p>
            </div>
            <div className='AnswerBoxOutline'>
                <div className='InnerAnswerBox'>
                    <div className='AnswerText'>
                    <p>We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two step process involving form filling and personal interview. Students acing both rounds are selected to be the part of the core team.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='Question' id='Q3'>
            <div className='QuestionBox'>
                <img src={BlueDownArrow} className='QuestionArrow' alt='DownArrow'></img>
                <p>What does a GDG Lead do?</p>
            </div>
            <div className='AnswerBoxOutline'>
                <div className='InnerAnswerBox'>
                    <div className='AnswerText'>
                    <p>A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='Question' id='Q4'>
            <div className='QuestionBox'>
                <img src={YellowDownArrow} className='QuestionArrow' alt='DownArrow'></img>
                <p>How is DSC related to Google?</p>
            </div>
            <div className='AnswerBoxOutline'>
                <div className='InnerAnswerBox'>
                    <div className='AnswerText'>
                    <p>A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='Question' id='Q5'>
            <div className='QuestionBox'>
                <img src={RedDownArrow} className='QuestionArrow' alt='DownArrow'></img>
                <p>How to reach us?</p>
            </div>
            <div className='AnswerBoxOutline'>
                <div className='InnerAnswerBox'>
                    <div className='AnswerText'>
                    <p>Mail us at <span id='gdgEmail'>"dsc.rknec@gmail.com"</span></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FAQs
