import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import './LatestUpdatesSlider.css';

const updates = [
  { id: 1, title: 'New Feature Released', description: 'Check out the latest feature that will improve your experience.' },
  { id: 2, title: 'Security Update', description: 'Important security updates have been applied to keep your data safe.' },
  { id: 3, title: 'Performance Improvements', description: 'We have optimized the application for better performance.' },
  { id: 4, title: 'API Update', description: 'New API Endpoints are available.' },
  { id: 5, title: 'Bug Fixes', description: 'Several bugs have been fixed.' },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3 } }
};

function LatestUpdatesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <motion.div
      className="latest-updates-slider-container"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>Latest Updates</h2>
      <Slider {...settings}>
        {updates.map(update => (
          <div key={update.id} className="update-card">
            <h3>{update.title}</h3>
            <p>{update.description}</p>
          </div>
        ))}
      </Slider>
      <a href="#" className="view-all-button">View All Updates</a>
    </motion.div>
  );
}

export default LatestUpdatesSlider;
