import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const DetailsModal = ({ isOpen, onRequestClose, selections, totalCost }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Selection Details"
      className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto mt-20 overflow-auto max-h-[80vh]"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Total Cost for the Event</h2>
      <p className="text-4xl font-semibold text-center text-green-600 mb-8">${totalCost.toLocaleString()}</p>
      <div className="overflow-auto max-h-[60vh]">
        <table className="w-full text-left table-auto border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 p-4">Name</th>
              <th className="border-b-2 p-4">Unit Cost</th>
              <th className="border-b-2 p-4">Quantity</th>
              <th className="border-b-2 p-4">Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {selections.map((item, index) => (
              <tr key={index}>
                <td className="border-b p-4">{item.name}</td>
                <td className="border-b p-4">${item.unitCost.toLocaleString()}</td>
                <td className="border-b p-4">{item.quantity}</td>
                <td className="border-b p-4">${item.totalCost.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 text-right">
        <button 
          onClick={onRequestClose} 
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default DetailsModal;
