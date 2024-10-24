import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMeal, setNumPeople } from '../features/meals/mealsSlice';
import meals from '../data/meals.json';


const MealSelection = () => {
  const dispatch = useDispatch();
  const numPeople = useSelector((state) => state.meals.numPeople);
  const selectedMeals = useSelector((state) => state.meals.selectedMeals);

  const totalCost = selectedMeals.reduce((total, selected, index) => {
    if (selected) {
      return total + meals[index].pricePerPerson * numPeople;
    }
    return total;
  }, 0);

  return (
    <div className="p-6" id='meals'>
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Meals Selection</h2>
      <div className="mb-6">
        <label className="text-lg font-semibold mr-4">Number of People:</label>
        <input 
          type="number" 
          value={numPeople} 
          onChange={(e) => dispatch(setNumPeople(e.target.value))} 
          className="border rounded px-3 py-1 w-20"
          min="0"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {meals.map((meal, index) => (
          <div key={meal.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                checked={selectedMeals[index]} 
                onChange={() => dispatch(toggleMeal(index))} 
                className="mr-3 h-5 w-5"
              />
              <span className="text-lg font-semibold">{meal.name}</span>
            </div>
            <span className="text-gray-600">${meal.pricePerPerson} per person</span>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <p className="text-xl font-semibold">Total Cost: ${totalCost.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default MealSelection;
