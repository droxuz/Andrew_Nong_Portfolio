import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import darksign from '../../Elements/Darksign_29.webp';
import './ProjectPageSelection.css';

export default function QuadrantCircle({
  sizeVh = 80, 
  colors = ['#e63946', '#f1faee', '#a8dadc', '#457b9d'],
  labels = ['LOL', 'Project Two', 'Project Three', 'Project Four'],
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
      <div className="quadrantContainer" style={{'--size': `${sizeVh}vh`, '--gap': `${gapVh}vh`}}
      >
        {/* Top Left Panel */}
        {openIndex !== 0 && (
          <motion.div
            key={0}
            layoutId="quad-0"
            layout
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="quadrantPanel panelTL"
            style={{ backgroundColor: colors[0] }}
            onClick={() => setOpenIndex(0)}
          >
            <div className="panelContent">{labels[0]}</div>
          </motion.div>
        )}

        {/* Top Right Panel */}
        {openIndex !== 1 && (
          <motion.div
            key={1}
            layoutId="quad-1"
            layout
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="quadrantPanel panelTR"
            style={{ backgroundColor: colors[1] }}
            onClick={() => setOpenIndex(1)}
          >
            <div className="panelContent">{labels[1]}</div>
          </motion.div>
        )}

        {/* Bottom Left Panel */}
        {openIndex !== 2 && (
          <motion.div
            key={2}
            layoutId="quad-2"
            layout
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="quadrantPanel panelBL"
            style={{ backgroundColor: colors[2] }}
            onClick={() => setOpenIndex(2)}
          >
            <div className="panelContent">{labels[2]}</div>
          </motion.div>
        )}

        {/* Bottom Right Panel */}
        {openIndex !== 3 && (
          <motion.div
            key={3}
            layoutId="quad-3"
            layout
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="quadrantPanel panelBR"
            style={{ backgroundColor: colors[3] }}
            onClick={() => setOpenIndex(3)}
          >
            <div className="panelContent">{labels[3]}</div>
          </motion.div>
        )}

        {openIndex !== null && (
          <div className="overlay" onClick={() => setOpenIndex(null)}>
            <motion.div
              className="modal"
              layoutId={`quad-${openIndex}`}
              layout
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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