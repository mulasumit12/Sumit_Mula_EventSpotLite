// src/components/EventModal.js
import React from 'react';
import { motion } from 'framer-motion';
import '../Css/EventModal.css';



const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose}>Close</button>
        <h2>{event.name}</h2>
        <img src={event.image} alt={event.name} />
        <p>{event.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default EventModal;
