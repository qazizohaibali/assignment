import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { styled } from '@mui/system';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
// Styled components
const ModalHeader = styled(Modal.Header)({
  backgroundColor: '#f0f4ef', // Light greenish background color
  borderBottom: '1px solid #172e00', // Dark green border for the header
});

const ModalBody = styled(Modal.Body)({
  backgroundColor: '#ffffff', // White background color for the body
  color: '#495057', // Dark text color for contrast
  borderBottom: '1px solid #172e00', // Dark green border at the bottom of the body
});

const ModalFooter = styled(Modal.Footer)({
  backgroundColor: '#f0f4ef', // Light greenish background color for footer
  borderTop: '1px solid #172e00', // Dark green border at the top of the footer
});

const ConfirmationModal = ({ open, onClose, value }) => {
  return (
    <Modal show={open} onHide={onClose} centered>
      <ModalHeader closeButton>
        <Modal.Title>
          {/* <QuestionMarkIcon width={50} style={{ marginRight: '8px', verticalAlign: 'middle',h, width:"200px" }} /> */}
        </Modal.Title>
      </ModalHeader>
      <ModalBody>
        <p>Do you want to change the status?</p>
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={onClose} style={{ backgroundColor: '#495057', borderColor: '#495057' }}>
          Cancel
        </Button>
        <Button variant="primary" onClick={value} style={{ backgroundColor: '#172e00', borderColor: '#172e00' }}>
          Confirm
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmationModal;
