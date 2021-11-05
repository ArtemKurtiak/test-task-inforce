import {Box, Button, Modal} from "@mui/material";
import React from "react";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
  open: boolean,
  setOpen: any,
  deleteHandler: any
}

const DeleteModal: React.FC<Props> = ({ open, setOpen, deleteHandler }) => {

  return <Modal
    open={open}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      Are you sure to delete?
      <Button onClick={deleteHandler} >Yes</Button>
      <Button onClick={() => {
        setOpen(false);
      }} >No</Button>
    </Box>
  </Modal>
}

export default DeleteModal;