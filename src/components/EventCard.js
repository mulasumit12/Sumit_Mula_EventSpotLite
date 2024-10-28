// src/components/EventCard.js
import React from 'react';
import '../Css/EventCard.css';
import { motion } from 'framer-motion';


const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card" onClick={() => onClick(event)}>
      <h3>{event.name}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
    </div>
  );
};

export default EventCard;
