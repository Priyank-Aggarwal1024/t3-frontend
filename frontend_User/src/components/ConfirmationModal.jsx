import React from "react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-darkSecondary p-4 rounded-md">
      <h3 className="text-xl mb-4">Are you sure?</h3>
      <p className="mb-4">This action cannot be undone.</p>
      <div className="flex gap-4">
        <button
          className="bg-primary px-4 py-2 rounded-md text-black"
          onClick={onConfirm}
        >
          Yes
        </button>
        <button
          className="bg-secondary px-4 py-2 rounded-md text-black"
          onClick={onClose}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
