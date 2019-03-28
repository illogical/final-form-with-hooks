import React, { useState, ReactNode, FunctionComponent } from "react";
import { Modal, Button } from "semantic-ui-react";

interface ModalProps {
  title: string;
  buttonText: string;
  size?: "mini" | "tiny" | "small" | "large" | "fullscreen";
}

const onNextModalClick = () => {};

// TODO: onNextModalClick
// TODO: how to pass Modal.Actions

export const ModalFactory: FunctionComponent<ModalProps> = ({
  title,
  buttonText,
  size,
  children
}) => {
  const modalProps = useModalClose(buttonText);

  return (
    <Modal closeIcon="close" {...modalProps} {...size}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content image>
        <Modal.Description>{children}</Modal.Description>
      </Modal.Content>
      <Modal.Actions />
    </Modal>
  );
};

// trigger replaced the need to handle the isOpen however now how to dismiss it?
const useModalClose = (buttonText: string) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const trigger = <Button onClick={openModal}>{buttonText}</Button>;

  return {
    open: isOpen,
    onClose: closeModal,
    onOpen: openModal,
    trigger // why does this fail?
  };
};

// to use:
{
  /* // <ModalExampleMultiple />
        <ModalFactory
          title="Modal factory in action"
          buttonText="Open my modal"
        >
          <div>Here is some simple content</div>
          <br />
          <ModalFactory title="a 2nd modal!" buttonText="Open another one" />
        </ModalFactory> */
}
