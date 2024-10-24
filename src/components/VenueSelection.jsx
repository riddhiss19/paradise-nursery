import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/venue/venueSlice';
import { getImagePath } from '../utils/basePath';

import rooms from '../data/rooms.json';


const VenueSelection = () => {
  const dispatch = useDispatch();
  const selectedRooms = useSelector((state) => state.venue.selectedRooms);

  const totalCost = selectedRooms.reduce((total, count, index) => {
    return total + count * rooms[index].price;
  }, 0);

  return (
    <div className="p-6" id="venue">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Venue Room Selection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room, index) => (
          <div
            key={room.id}
            className="bg-white rounded-lg shadow-lg p-4 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img src={getImagePath(room.image)} alt={room.name} className="mb-4 rounded-lg h-40 w-full object-cover" />
            <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
            <p className="text-gray-600">Capacity: {room.capacity}</p>
            <p className="text-gray-600 font-semibold mb-4">${room.price.toLocaleString()} ea</p>
            <div className="flex items-center justify-center space-x-4">
              <button
                className="bg-[#123b6a] text-white px-4 py-2 rounded hover:bg-[#0f2d4d]"
                onClick={() => dispatch(decrement(index))}
              >-</button>
              <span className="text-lg font-semibold">{selectedRooms[index]}</span>
              <button
                className="bg-[#123b6a] text-white px-4 py-2 rounded hover:bg-[#0f2d4d]"
                onClick={() => dispatch(increment(index))}
              >+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <p className="text-xl font-semibold">Total Cost: ${totalCost.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default VenueSelection;
