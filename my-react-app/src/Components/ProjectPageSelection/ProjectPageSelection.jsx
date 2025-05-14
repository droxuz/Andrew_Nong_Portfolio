import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import './ProjectPageSelection.css';

export default function QuadrantCircle({
  sizeVh = 70,
  colors = ['rgb(6, 5, 1)', 'rgb(6, 5, 1)', 'rgb(6, 5, 1)', 'rgb(6, 5, 1)'],
  labels = ['1', 'Project Two', 'Project Three', '4'],
  modalContents = [
    'Details for quadrant One',
    'Details for quadrant Two',
    'Details for quadrant Three',
    'Details for quadrant Four'
  ],
  gapVh = 2
}) {
  const [openIndex, setOpenIndex] = useState(null);
  

  
  return (
    <LayoutGroup>
      <div className="circleWrap">
        
        <div className="rotator">
          <div
            className="quadrantContainer"
            style={{ '--size': `${sizeVh}vh`, '--gap': `${gapVh}vh` }}
          >
            {/* Top Panel */}
            {openIndex !== 0 && (
              <motion.div
                className="quadrantPanel panelTOP"
                key={0}
                layoutId="quad0"
                layout
                initial={{ scale: 1, opacity: 0.25, x: 235,  y:0 }}
                animate={{ scale: 1, opacity: 1, x: 0, y: 0, borderRadius: ["100%", "50%","0%"],borderTopLeftRadius: ["100%","100%"],borderBottomRightRadius:["100%","50%","2.5%"]}}
                whileHover={{ scale: 1.025 , transition:{duration: 0.5}, boxShadow: "-2px -2px 5px rgb(208, 100, 64)"}}
                transition={{ delay:0.2, duration: 1.5, type: 'tween'}}
                style={{ backgroundColor: colors[0] }}
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
                initial={{ scale: 1, opacity: 0.25, x: 0, y: 235}}
                animate={{ scale: 1, opacity: 1, x: 0, y: 0 , borderRadius: ["100%", "50%","0%"],borderTopRightRadius: ["100%","100%"],borderBottomLeftRadius:["100%","50%","2.5%"]}}
                whileHover={{ scale: 1.025 , transition:{duration: 0.5}, boxShadow: "2px -2px 5px rgb(208, 100, 64)"}}
                transition={{ delay:0.6, duration: 1.5, type: 'tween' }}
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
                initial={{ scale: 1, opacity: 0.25, x: 0, y: -235}}
                animate={{ scale: 1, opacity: 1, x: 0, y: 0, borderRadius: ["100%", "50%","0%"],borderBottomLeftRadius: ["100%","100%"],borderTopRightRadius:["100%","50%","2.5%"]}}
                whileHover={{  scale: 1.025 , transition:{duration: 0.5}, boxShadow: "-2px 2px 5px rgb(208, 100, 64)"}}
                transition={{ delay:0.6, duration: 1.5, type: 'tween' }}
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
                layout
                initial={{ scale: 1, opacity: 0.25, x: -235, y: 0}}
                animate={{ scale: 1, opacity: 1, x: 0, y: 0, borderRadius: ["100%", "50%","0%"],borderBottomRightRadius: ["100%","100%"],borderTopLeftRadius:["100%","50%","2.5%"]}}
                whileHover={{ scale: 1.025 , transition:{duration: 0.5}, boxShadow: "2px 2px 5px rgb(208, 100, 64)"}}
                transition={{ delay:0.2, duration: 1.5, type: 'tween' }}
                className="quadrantPanel panelBOTTOM"
                style={{ backgroundColor: colors[3] }}
                onClick={() => setOpenIndex(3)}
              >
                <div className="panelContent">{labels[3]}</div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Modal */}
        {openIndex !== null && (
          <div className="overlay" onClick={() => setOpenIndex(null)}>
            <motion.div
              className="modal"
              layoutId={`quad${openIndex}`}
              layout
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              transition={{ type: 'tween'}}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{labels[openIndex]}</h2>
              <p>{modalContents[openIndex]}</p>
              <button onClick={() => setOpenIndex(null)}>Close</button>
            </motion.div>
          </div>
        )}
      </div>
    </LayoutGroup>
  );
}