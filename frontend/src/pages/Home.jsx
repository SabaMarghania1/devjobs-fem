import { useState } from "react";
import Filter from "../components/Filter";
import Modal from "../components/Modal";

const Home = () => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div className="w-full h-40 -mt-10 ">
      <Filter toggleModal={toggleModal} />
      {isModal && <Modal toggleModal={toggleModal} />}
    </div>
  );
};

export default Home;
