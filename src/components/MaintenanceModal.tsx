import React, { useState } from "react";
import { Link } from "react-router-dom";

const MaintenanceModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg relative">
          <button className="absolute top-2 right-2 text-gray-600" onClick={closeModal}>
            &times;
          </button>
          <div>Service Under Maintenance</div>
          <Link to="https://aimipp.com/en/notice/15" className="text-blue-500">
            https://aimipp.com/en/notice/15
          </Link>
        </div>
      </div>
    )
  );
};

export default MaintenanceModal;
