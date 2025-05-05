import React, {useState} from "react";
import {motion, LayoutGroup} from 'framer-motion';

export default function QuadrantCircle({
    size = 600, //Diameter
    colors = ['#e63946', '#f1faee', '#a8dadc', '#457b9d'],
    labels = ['Project One', 'Project Two', 'Project Three', 'Project Four'],
    modalContents = [
      'Details for quadrant One',
      'Details for quadrant Two',
      'Details for quadrant Three',
      'Details for quadrant Four'
    ],
    gap = 16 
  }) {
    const [openIndex, setOpenIndex] = useState(null);
    const radius = size / 2;
    const halfGap = gap / 2;
  
    // Compute style for each quadrant
    const quadrantStyle = (i) => {
      const halfGap = gap / 2;
      const panelGap = radius - halfGap;
      const posTop = i < 2 ? 0 : radius + halfGap;
      const posLeft = i % 2 === 0 ? 0 : radius + halfGap;
      return {
        position: 'absolute',
        width: panelGap,
        height: panelGap,
        top: posTop,
        left: posLeft,
        backgroundColor: colors[i],
        cursor: 'pointer',
        overflow: 'hidden',
        //Border radius for outer corner
        ...(i === 0 && { borderTopLeftRadius: size }),
        ...(i === 1 && { borderTopRightRadius: size }),
        ...(i === 2 && { borderBottomLeftRadius: size }),
        ...(i === 3 && { borderBottomRightRadius: size })
      };
    };
    
      // Overlay styles
    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    };

  // Modal styles
    const modalStyle = {
        background: 'white',
        padding: 24,
        borderRadius: 16,
        minWidth: 200,
        maxWidth: '80vw',
        cursor: 'auto'
    };

    return (
        <LayoutGroup>
      <div style={{ position: 'relative', width: size + gap, height: size + gap, margin: '0 auto' }}>
        {labels.map((label, i) =>
          openIndex === i ? null : (
            <motion.div
              key={i}
              layoutId={`quad-${i}`}
              layout
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={quadrantStyle(i)}
              onClick={() => setOpenIndex(i)}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none'
                }}
              >
                {label}
              </div>
            </motion.div>
          )
        )}

        {openIndex !== null && (
          <div style={overlayStyle} onClick={() => setOpenIndex(null)}>
            <motion.div
              layoutId={`quad-${openIndex}`}
              layout
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={modalStyle}
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