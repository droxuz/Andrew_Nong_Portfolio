import React, { useState } from 'react';
import { motion, LayoutGroup, AnimatePresence, easeOut } from 'framer-motion';

import './testing.css';
export default function Testing({
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
}){
    const sizePx = window.innerHeight * (sizeVh / 100);
    const gapPx  = window.innerHeight * (gapVh  / 100);
    const r      = sizePx / 2;
    const half   = r - gapPx / 2;
    return (
  <LayoutGroup>
    <div
      className="circleWrap"
      style={{
        position: 'relative',
        width: sizePx,
        height: sizePx,
        margin: '5vh auto 0'
      }}
    >
      <div className="rotator">
        <div className="quadrantContainer">
          <div className="quadrant q1" />
          <div className="quadrant q2" />
          <div className="quadrant q3" />
          <div className="quadrant q4" />
        </div>
      </div>
    </div>
  </LayoutGroup>
)
}