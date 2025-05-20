import React, { useState } from 'react';
import { motion, LayoutGroup, AnimatePresence} from 'framer-motion';
import './ProjectPageSelection.css';

export default function QuadrantCircle({
  sizeVh = 70,
  colors = ['rgb(6, 5, 1)', 'rgb(6, 5, 1)', 'rgb(6, 5, 1)', 'rgb(6, 5, 1)'],
  labels = ['WaterWizard', 'HideoutHelper', 'TiltTerrain', '4'],
  modalContents = [
    'Utilizing an Arduino Grove, water pump, MOSFET, moisture sensor, and some tubing. I have created a automated plant watering system that periodically probes the soil using the moisture sensor and dispenses water through the waterpump. Through Java and the accompanying Firmata and Princeton StdDraw, I am able to control the Arduino Grove board with the aforementioned components, and using Princeton\'s StdDraw I am able to display the moisture level on a continuous graph.',
    'Details for quadrant Two',
    'Details for quadrant Three',
    'Details for quadrant Four'
  ],
  gapVh = 2,
  
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const sizePx = window.innerHeight * (sizeVh / 100);
  const gapPx  = window.innerHeight * (gapVh  / 100);
  const r      = sizePx / 2;
  const half   = r - gapPx / 2;

  
  return (
    <LayoutGroup>
      <div className="circleWrap" style={{ position: 'relative', width: sizePx, height: sizePx, margin: '5vh auto 0'}}>
        <div className="rotator">
          <div className="quadrantContainer" style={{ '--size': `${sizeVh}vh`, '--gap': `${gapVh}vh` }}>
            <AnimatePresence initial={true} mode='sync'>
            {/* Top Panel */}
            {openIndex !== 0 && (
              <motion.div
                className="quadrantPanel panelTOP"
                key={0}
                
                style={{backgroundColor: colors[1] }}
                initial={{ scale: 1, opacity: 0.25, x:['53%'],y:['-20.5%'],transition:{duration: 1}, rotate:45}}
                animate={{ scale: 1, opacity: 1, x:['53%'], y:['-20.5%'], borderRadius: ["100%", "100%","0%"],borderTopLeftRadius: ["100%","100%"],borderBottomRightRadius:["100%","100%","2.5%"], transition:{duration:0.5,type:'tween',ease:'easeIn'},rotate:45}}
                transition={{ duration:1, type: 'tween',ease:'easeIn'}}
                exit={{ scale: 1, opacity: 0 ,x:['53%'],y:['-20.5%'], transition:{ type: 'tween', duration:0, ease:'easeOut'}}}  
                whileHover={{scale: 1.025 , transition:{duration: 0.5}, boxShadow: "-2px -2px 5px rgb(208, 100, 64)"}}                
                onClick={() => setOpenIndex(0)}
              >
                <div className="panelContent">{labels[0]}</div>
              </motion.div>
            )}

            {/* Right Panel */}
            {openIndex !== 1 && (
              <motion.div
                key={1}
                layoutId="quad1"
                layout
                initial={{ scale: 1, opacity: 0.25,}}
                animate={{ scale: 1, opacity: 1, x: 0, y: 0 , borderRadius: ["100%", "50%","0%"],borderTopRightRadius: ["100%","100%"],borderBottomLeftRadius:["100%","50%","2.5%"],transition:{duration:0.5,type:'tween',ease:'easeIn'}}}
                whileHover={{ scale: 1.025 , transition:{duration: 0.5}, boxShadow: "2px -2px 5px rgb(208, 100, 64)"}}
                transition={{ duration: 1.0, type: 'tween', ease: "easeIn"}}
                className="quadrantPanel panelRIGHT"
                style={{ backgroundColor: colors[1] }}
                onClick={() => setOpenIndex(1)}
              >
                <div className="panelContent">{labels[1]}</div>
              </motion.div>
            )}

            {/* Left Panel */}
            {openIndex !== 2 && (
              <motion.div
                key={2}
                layoutId="quad2"
                layout
                initial={{ scale: 1, opacity: 0.25}}
                animate={{ scale: 1, opacity: 1, x:0, y: 0, borderRadius: ["100%", "50%","0%"],borderBottomLeftRadius: ["100%","100%"],borderTopRightRadius:["100%","50%","2.5%"], transition:{duration:0.5,type:'tween',ease:'easeIn'}}}
                whileHover={{  scale: 1.025 , transition:{duration: 0.5}, boxShadow: "-2px 2px 5px rgb(208, 100, 64)"}}
                transition={{ delay:0, duration: 1.0, type: 'tween', ease: "easeIn" }}
                className="quadrantPanel panelLEFT"
                style={{ backgroundColor: colors[2] }}
                onClick={() => setOpenIndex(2)}
              >
                <div className="panelContent">{labels[2]}</div>
              </motion.div>
            )}

            {/* Bottom Panel */}
            {openIndex !== 3 && (
              <motion.div
                key={3}
                layoutId="quad3"
                layout={false}
                initial={{ scale: 1, opacity: 0.25}}
                animate={{ scale: 1, opacity: 1, x: 0, y: 0, borderRadius: ["100%", "50%","0%"],borderBottomRightRadius: ["100%","100%"],borderTopLeftRadius:["100%","50%","2.5%"], transition:{duration:0.5,type:'tween',ease:'easeIn'}}}
                whileHover={{ scale: 1.025 , transition:{duration: 0.5}, boxShadow: "2px 2px 5px rgb(208, 100, 64)"}}
                transition={{ delay:0, duration: 1.0, type: 'tween', ease: "easeIn"}}
                className="quadrantPanel panelBOTTOM"
                style={{ backgroundColor: colors[3] }}
                onClick={() => setOpenIndex(3)}
              >
                <div className="panelContent">{labels[3]}</div>
              </motion.div>
            )}
            </AnimatePresence>
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence initial={false} mode='sync'>
        {openIndex !== null && (
          <div className="overlay" onClick={() => setOpenIndex(null)}>
            <motion.div
              className="modal"
              layoutId={`quad${openIndex}`}
              layout
              initial={{ scale: 1 , opacity:1 }}
              animate={{ scale: 1 , duration: 0, borderRadius:'1%',}}
              //exit={{ scale: 0, transition:{duration: 0, ease: 'easeOut', opacity:0}}}
              transition={{ type: 'tween', duration: 0.5, ease:'easeInOut', opacity:0}} 
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{labels[openIndex]}</h2>
              <p>{modalContents[openIndex]}</p>
              <button onClick={() => setOpenIndex(null)}>Close</button>
            </motion.div>
          </div>
        )}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
}