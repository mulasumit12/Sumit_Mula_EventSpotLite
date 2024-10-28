
import React, { useState } from 'react';
import EventCard from './EventCard';
import EventModal from './EventModal';
import { motion } from 'framer-motion';

// Import images directly
import sampleImage from '../assets/sample-image.jpg';
import artExhibitionImage from '../assets/OIP.jpg';

const events = [
  {
    id: 1,
    name: "Music Concert",
    date: "2024-10-01",
    location: "Central Park",
    description: "An amazing live music experience with popular bands.",
    image: sampleImage,
  },
  {
    id: 2,
    name: "Art Exhibition",
    date: "2024-10-10",
    location: "City Gallery",
    description: "A showcase of contemporary art by local artists.",
    image: artExhibitionImage,
  },
];

const EventList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filter events based on search query
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search events by name or location"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="event-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onClick={() => setSelectedEvent(event)} />
          ))
        ) : (
          <p>No events found</p>
        )}
      </div>
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
};

export default EventList;
