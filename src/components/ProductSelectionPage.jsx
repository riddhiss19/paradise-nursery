import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../shared/Header';
import VenueSelection from './VenueSelection';
import AddOnsSelection from './AddOnsSelection';
import MealSelection from './MealSelection';
import ProductListing from './ProductListing';
import DetailsModal from './DetailsModal';
import rooms from '../data/rooms.json';
import addOns from '../data/addOns.json';
import meals from '../data/meals.json';

const ProductSelectionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedRooms = useSelector((state) => state.venue.selectedRooms);
  const selectedAddOns = useSelector((state) => state.addOns.selectedAddOns);
  const selectedMeals = useSelector((state) => state.meals.selectedMeals);
  const numPeople = useSelector((state) => state.meals.numPeople);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const selections = [];

  // Map selected rooms
  selectedRooms.forEach((quantity, index) => {
    if (quantity > 0) {
      selections.push({
        name: rooms[index].name,
        unitCost: rooms[index].price,
        quantity: quantity,
        totalCost: quantity * rooms[index].price,
      });
    }
  });

  // Map selected add-ons
  selectedAddOns.forEach((quantity, index) => {
    if (quantity > 0) {
      selections.push({
        name: addOns[index].name,
        unitCost: addOns[index].price,
        quantity: quantity,
        totalCost: quantity * addOns[index].price,
      });
    }
  });

  // Map selected meals
  selectedMeals.forEach((selected, index) => {
    if (selected) {
      selections.push({
        name: meals[index].name,
        unitCost: meals[index].pricePerPerson,
        quantity: numPeople,
        totalCost: numPeople * meals[index].pricePerPerson,
      });
    }
  });

  const totalCost = selections.reduce((total, item) => total + item.totalCost, 0);

  return (
    <div>
      <Header openModal={openModal} />
      
      <div className="container mx-auto p-6">
      <ProductListing />
        <DetailsModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          selections={selections}
          totalCost={totalCost}
        />
      </div>
    </div>
  );
};

export default ProductSelectionPage;