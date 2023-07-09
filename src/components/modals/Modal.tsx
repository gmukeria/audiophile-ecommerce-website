import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  overlayClose?: boolean;
};

const Modal: React.FC<ModalProps> = ({
  open,
  children,
  onClose,
  overlayClose = true,
}) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <Overlay {...(overlayClose && { onClick: onClose })} />
      <ModalContainer>{children}</ModalContainer>
    </>,
    document.getElementById("portal")!
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.4;
  z-index: 500;
  overflow: hidden;
  background-color: var(--black);
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 42%;
  left: 50%;
  padding: 50px;
  z-index: 1001;
  overflow: hidden;
  transform: translate(-50%, -50%);
`;
