import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import AddEventForm from './AddEventForm';

const AddEventButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center mx-auto mb-6">
        <button
          className="bg-tertiaryDark hover:bg-secondaryDark text-white font-bold py-2 px-4 rounded-xl mt-4"
          onClick={toggleModal}
        >
          Add Event
        </button>
      </div>

      <Modal open={isModalOpen} onClose={toggleModal} center>
        <AddEventForm
          isOpen={isModalOpen}
          onClose={toggleModal}
        />
      </Modal>
    </>
  );
};

export default AddEventButton;
