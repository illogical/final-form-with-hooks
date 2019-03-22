import React, { useState, ReactNode, FunctionComponent } from "react";
import { Modal, Button } from "semantic-ui-react";

interface ModalProps {
  description: ReactNode;
}

const closeModal = () => {};
const onNextModalClick = () => {};

// TODO: onNextModalClick
// TODO: close modal boolean?
// TODO: try wrapping some content in this thing
// TODO:
// TODO:
// TODO:

export const ModalFactory: FunctionComponent<ModalProps> = ({
  description,
  children
}) => {
  return (
    <Modal closeIcon="close" open={true} onClose={closeModal}>
      <Modal.Header>My modal</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          {description}
          <div>
            <Button onClick={onNextModalClick}>Add Another Modal</Button>
          </div>
        </Modal.Description>
        {children}
      </Modal.Content>
      <Modal.Actions />
    </Modal>
  );
};
