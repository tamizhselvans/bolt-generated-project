import React from 'react';
import { motion } from 'framer-motion';
import './LatestUpdatesCard.css';

const updates = [
  { id: 1, title: 'New Feature Released', description: 'Check out the latest feature that will improve your experience.' },
  { id: 2, title: 'Security Update', description: 'Important security updates have been applied to keep your data safe.' },
  { id: 3, title: 'Performance Improvements', description: 'We have optimized the application for better performance.' },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3 } }
};

function LatestUpdatesCard() {
  return (
    <motion.div
      className="latest-updates-card"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>Latest Updates</h2>
      <ul>
        {updates.map(update => (
          <li key={update.id}>
            <h3>{update.title}</h3>
            <p>{update.description}</p>
          </li>
        ))}
      </ul>
      <a href="#" className="view-all-button">View All Updates</a>
    </motion.div>
  );
}

export default LatestUpdatesCard;
