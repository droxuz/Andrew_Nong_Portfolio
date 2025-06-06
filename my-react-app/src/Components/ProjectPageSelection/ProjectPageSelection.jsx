import React, { useState } from 'react';
import { motion, LayoutGroup, AnimatePresence} from 'framer-motion';

import './ProjectPageSelection.css';
import darksign from '../../Elements/Darksign_29.webp';

export default function QuadrantCircle({
  sizeVh = 70,
  colors = ['rgb(6, 5, 1)', 'rgb(6, 5, 1)', 'rgb(6, 5, 1)', 'rgb(6, 5, 1)'],
  labels = ['WaterWizard', 'HideoutHelper', 'TiltTerrain', '4'],
  modalContents = [
    'Utilizing an Arduino Grove, water pump, MOSFET, moisture sensor, and some tubing. I have created a automated plant watering system that periodically probes the soil using the moisture sensor and dispenses water through the waterpump. Through Java and the accompanying Firmata and Princeton StdDraw, I am able to control the Arduino Grove board with the aforementioned components, and using Princeton\'s StdDraw I am able to display the moisture level on a continuous graph.',

    'More of a passion project, I created a web application that from Javascript, CSS, and HTML with the help of Google Firebase to provide a No-SQL database and site hosting. The goal of this project was to learn basic web design while using a database connection. The project itself is used as a helper tool for the online game Escape From Tarkov and helps user keep track of what is needed to upgrade their very own Hideout(A base of operations that provides players with valuable tools and resources).',

    'An academic project with a partner Mayank Neupane, We created a bluetooth controlled car with the help of a DE-10 Lite FGPA board, ESP32 development board, 2 electric motors, and a Motor Driver Controller board. Using Verilog we developed the code to manipulate bits to control the motor, used the on-board 5-axis acclerometer to display tilt of the vehicle, and the arduinoIDE to setup the ESP32 board.',

    'Details for quadrant Four'
  ],
  projectLinks = [
    {href:" ", label:" "},
    {href:" ", label:" "},
    {href:" ", label:" "},
    {href:" ", label:" "}
  ],
  gapVh = 2,
  
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const sizePx = window.innerHeight * (sizeVh / 100);
  const gapPx  = window.innerHeight * (gapVh  / 100);
  const r      = sizePx / 2;
  const half   = r - gapPx / 2;

  
  return (
      <div className="circleWrap" style={{ position: 'relative', width: sizePx, height: sizePx, margin: '5vh auto 0'}}>
        <div className="rotator">
          <div className="quadrantContainer" style={{ '--size': `${sizeVh}vh`, '--gap': `${gapVh}vh` }}>
            <AnimatePresence initial={true} mode='popLayout'>
            {/* Top Panel */}
            {openIndex !== 0 && (
              <motion.div
                className="quadrantPanel panelTOP"
                key={0}
                style={{backgroundColor: colors[1] }}

                initial={{ scale:1, opacity: 0, x:['53%'],y:['-21.5%'],transition:{duration: 1}, rotate:45}}
                animate={{ scale:1, opacity: 1, x:['53%'], y:['-21.5%'], borderRadius: ["100%","75%", "50%","25%", "2.5%"],borderTopLeftRadius: ["100%","100%"],borderBottomRightRadius:["100%","100%","2.5%"], rotate: 45, transition:{type:'tween', delay: 1, duration:1, ease:'easeIn'}}}
                exit={{ scale:0.5, opacity: 0, x:['53%'], y:['-20.5%','25%'], transition:{default:{type:'tween', duration:1, ease:'easeIn'}}}}  
                whileHover={{scale: 1.025 , transition:{duration: 0.5}, boxShadow: "-2px -2px 5px rgb(208, 100, 64)"}}                
                onClick={() => setOpenIndex(0)}
              >
                <div className="panelContent">{labels[0]}</div>
              </motion.div>
            )}
            </AnimatePresence>
            <AnimatePresence>
            {/* Right Panel */}
            {openIndex !== 1 && (
              <motion.div
                className="quadrantPanel panelRIGHT"
                key={1}
                style={{ backgroundColor: colors[1] }}

                initial={{ scale: 1, opacity: 0, x:['21.5%'], y:['53%'], transition:{duration:1}, rotate:45}}
                animate={{ scale: 1, opacity: 1, x:['21.5%'], y:['53%'], borderRadius: ["100%","75%", "50%","25%", "2.5%"],borderTopRightRadius: ["100%","100%"],borderBottomLeftRadius:["100%","50%","2.5%"], rotate: 45, transition:{type:'tween', delay: 1, duration:1, ease:'easeIn'}}}
                exit={{scale:0.5, opacity:0, x:['21.5%','-21.5%'], y:['53%'], transition:{default:{type:'tween', duration:1, ease:'easeIn'}}}}
                whileHover={{ scale: 1.025 , transition:{duration: 0.5}, boxShadow: "2px -2px 5px rgb(208, 100, 64)"}}
                
                onClick={() => setOpenIndex(1)}
              >
                <div className="panelContent">{labels[1]}</div>
              </motion.div>
            )}
            </AnimatePresence>
            <AnimatePresence>
            {/* Left Panel */}
            {openIndex !== 2 && (
              <motion.div
                key={2}
                className="quadrantPanel panelLEFT"
                style={{ backgroundColor: colors[2] }}

                initial={{ scale: 1, opacity: 0, x:['-21.5%'], y:['-53%'], transition:{duration:1}, rotate:45}}
                animate={{ scale: 1, opacity: 1, x:['-21.5%'], y:['-53%'], borderRadius: ["100%","75%", "50%","25%", "2.5%"],borderBottomLeftRadius: ["100%","100%"],borderTopRightRadius:["100%","50%","2.5%"], rotate: 45, transition:{type:'tween', delay: 1, duration:1, ease:'easeIn'}}}
                exit={{scale:0.5, opacity:0, x:['-21.5%','25%'], y:['-53%'], transition:{default:{type:'tween', duration:1, ease:'easeIn'}}}}
                whileHover={{  scale: 1.025 , transition:{duration: 0.5}, boxShadow: "-2px 2px 5px rgb(208, 100, 64)"}}

                onClick={() => setOpenIndex(2)}
              >
                <div className="panelContent">{labels[2]}</div>
              </motion.div>
            )}
            </AnimatePresence>
            <AnimatePresence>
            {/* Bottom Panel */}
            {openIndex !== 3 && (
              <motion.div
                key={3}
                className="quadrantPanel panelBOTTOM"
                style={{ backgroundColor: colors[3] }}
                initial={{ scale: 1, opacity: 0, x:['-53%'], y:['21.5%'], transition:{duration:1}, rotate:45}}
                animate={{ scale: 1, opacity: 1, x:['-53%'], y:['21.5%'], borderRadius: ["100%","75%", "50%","25%", "2.5%"],borderBottomRightRadius: ["100%","100%"],borderTopLeftRadius:["100%","50%","2.5%"], rotate: 45, transition:{type:'tween', delay: 1, duration:1, ease:'easeIn'}}}
                exit={{scale:0.5, opacity:0, x:['-53%'], y:['21.5%','-25%'], transition:{default:{type:'tween', duration:1, ease:'easeIn'}}}}
                whileHover={{ scale: 1.025 , transition:{duration: 0.5}, boxShadow: "2px 2px 5px rgb(208, 100, 64)"}}
                
                onClick={() => setOpenIndex(3)}
              >
                <div className="panelContent">{labels[3]}</div>
              </motion.div>
            )}
            </AnimatePresence>
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence initial={true} mode='sync'>
        {openIndex !== null && (
          <div className="overlay" onClick={() => setOpenIndex(null)}>
            <motion.div
              className="modal"
              layoutId={`quad${openIndex}`}
              layout
              initial={{ scale: 1 , opacity:1 }}
              animate={{ scale: 1 , duration: 0, borderRadius:['50%','1%'], transition:{type:'tween',duration:1}}}
              exit={{ scale: 0, transition:{duration: 0, ease: 'easeOut', opacity:0}}}
              transition={{ type: 'tween', duration: 5, ease:'easeInOut', opacity:0}} 
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className='modalHeader'>{labels[openIndex]}</h2>
              <p className="modalParagraph">{modalContents[openIndex]}</p>
              <a className="modalLink"href={projectLinks[openIndex.href]} target="_blank" rel="noopener noreferrer">{projectLinks[openIndex].label}</a>
              <button className="modalButton" onClick={() => setOpenIndex(null)}>Close</button>
            </motion.div>
          </div>
        )}
        </AnimatePresence>
      </div>
    
  );
}