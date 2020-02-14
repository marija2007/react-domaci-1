import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const Btn = (props) => {

  const {
    buttonLabel = 'Press me',
    className = 'btn '
  } = props;

  const userName = props.user.name;
  const age = props.user.age;
  const url = props.user.url;
  const title = 'Licna karta';

  console.log(userName)
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
            <img src={url} alt={userName}/>
            <p>{userName}</p>
            <p>{age}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Btn;