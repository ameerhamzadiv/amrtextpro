import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'


export default function Hero() {

    const transition = {type: 'spring', duration: 3}

  return (
    <div className="hero" id="home">
        <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-add">
            <motion.div
            initial={{left:"238px"}}
            whileInView={{left:"8px"}}
            transition={{...transition, type: "tween"}}
            ></motion.div>
            <span>the best fitness club in the town</span>
        </div>
        <div className="hero-text">
            <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
            </div>
            <div>
                <span>Ideal body</span>
            </div>
            <div>
                <span>
                In here we will help you to shape and build your ideal into live up your life to fullset.  
                </span>
            </div>
        </div>
        <div className="figures">
            <div>
                <span>
                <NumberCounter end={140} start={100} delay='4' preFix="+" />
                </span>
                <span>expext coachs</span>
            </div>
            <div>
                <span>
                    <NumberCounter end={978} start={700} delay='4' preFix="+" />
                </span>
                <span>members joined</span>
            </div>
            <div>
                <span>
                <NumberCounter end={50} start={10} delay='2' preFix="+" />
                </span>
                <span>fitness programs</span>
            </div>

        </div>
        <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div 
        initial={{right:"-1rem"}}
        whileInView={{right:"4rem"}}
        transition={transition}
        className="heart-rate">
            <img src={heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
        </motion.div>

        <img src={hero_image} className="hero-image" alt="" />
        <motion.img 
        initial={{right:"11rem"}}
        whileInView={{right:"20rem"}}
        transition={transition}
        src={hero_image_back} className="hero-image-back" alt="" />

        <motion.div 
        initial={{right:"37rem"}}
        whileInView={{right:"28rem"}}
        transition={transition}
        className="calories">
            <img src={calories} alt="" />
            <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
            </div>
        </motion.div>




      </div>
    </div>
  )
}
