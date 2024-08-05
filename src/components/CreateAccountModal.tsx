import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { CallApiCreateAccount } from "@/api/CallApi";

const CreateAccountModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = React.useState("");

  const onSubmit = () => {
    const body = {
      titular: name,
      saldo: 0,
      fechaCreacion: new Date().toISOString(),
    };

    CallApiCreateAccount(body)
      .then((response) => {
        console.log(response);
        onOpenChange();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        className="text-sm"
        variant="flat"
      >
        Crear Cuenta
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Crear Cuenta
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Nombre"
                  placeholder="Digita el nombre"
                  variant="bordered"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onSubmit}>
                  Crear
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateAccountModal;
