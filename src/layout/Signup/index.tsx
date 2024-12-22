import { useEffect, useState, MouseEvent } from "react";
import styled from "styled-components";
import SignupForm from "../SignupForm";
import { X } from "@phosphor-icons/react";
import { createNewUser, IDBError } from "../../utils/database";
import SignupSuccess from "../SignupSuccess";

const SignupFloatingButton = styled.button`
  position: fixed;
  bottom: 48px;
  right: 48px;
  background-color: #ff4003;
  cursor: pointer;
  color: white;
  padding: 0 36px;
  border: none;
  border-radius: 64px;
  font-size: 34px;
  height: 64px;
  border: 2px solid white;

  box-shadow: 0.3px 0.5px 0.7px rgba(0, 0, 0, 0.34),
    1.5px 2.9px 3.7px -0.4px rgba(0, 0, 0, 0.34),
    2.7px 5.4px 6.8px -0.7px rgba(0, 0, 0, 0.34),
    4.5px 8.9px 11.2px -1.1px rgba(0, 0, 0, 0.34),
    7.1px 14.3px 18px -1.4px rgba(0, 0, 0, 0.34),
    11.2px 22.3px 28.1px -1.8px rgba(0, 0, 0, 0.34),
    17px 33.9px 42.7px -2.1px rgba(0, 0, 0, 0.34),
    25px 50px 62.9px -2.5px rgba(0, 0, 0, 0.34);

  @media (max-width: 600px) {
    bottom: 24px;
    right: 24px;
    font-size: 21px;
    height: 48px;
  }

  @media (max-width: 600px) {
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  place-items: center;
  z-index: 999;

  backdrop-filter: blur(5px);
  animation: fadeInBackdrop 400ms cubic-bezier(0.08, 0.82, 0.17, 1);

  @keyframes fadeInBackdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  margin: 12px;
  padding: 24px;
  width: calc(100% - 24px - 48px);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;

  display: grid;
  grid-template-columns: 1fr;

  animation: fadeInContent 400ms cubic-bezier(0.08, 0.82, 0.17, 1);
  @keyframes fadeInContent {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -26px;
  right: 0;
  width: 24px;
  height: 24px;
  border: 0;
  outline: none;
  background-color: transparent;
`;

export default function Signup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitSuccess(false);
    document.body.style.overflow = "auto";
  };

  const submitSignup = (email?: string, phone?: string) => {
    createNewUser(email ?? "example@mail.com", phone)
      .then(() => setIsSubmitSuccess(true))
      .catch((error: IDBError) => {
        // already signed up - OK to pass
        if (error.message.includes("Record not unique")) {
          setIsSubmitSuccess(true);
        }
      });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClickAway = (event: MouseEvent) => {
    const modalBackdrop = document.querySelector("[data-clickaway]");
    if (modalBackdrop === event.target) closeModal();
  };

  return (
    <div>
      <SignupFloatingButton onClick={openModal}>Sign up</SignupFloatingButton>
      {isModalOpen && (
        <ModalBackdrop onClick={handleClickAway} data-clickaway>
          <ModalContent>
            <CloseButton onClick={closeModal}>
              <X size={24} color="#ff4003" weight="bold" />
            </CloseButton>
            {isSubmitSuccess && <SignupSuccess />}
            {!isSubmitSuccess && <SignupForm onSubmit={submitSignup} />}
          </ModalContent>
        </ModalBackdrop>
      )}
    </div>
  );
}
