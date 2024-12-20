import { Modal } from "@mui/material";

export const ChooseGameModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div>ChooseGameModal</div>
    </Modal>
  );
};
