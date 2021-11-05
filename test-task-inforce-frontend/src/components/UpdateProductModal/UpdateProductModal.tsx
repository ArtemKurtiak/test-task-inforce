import React, {useState} from "react";
import {Box, Button, Modal} from "@mui/material";
import {InputItemType} from "../../types/Input.type";
import InputItem from "../../pages/HomePage/components/InputItem/InputItem";

type Props = {
  open: boolean,
  setOpen: any,
  data: {
    name: string,
    imageUrl: string,
    size: {
      height: number,
      width: number
    },
    count: number
  },
  updateHandler: any
}

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

const UpdateProductModal: React.FC<Props> = ({ data, open, setOpen, updateHandler }) => {
  const [name, setName] = useState<string>(data.name);
  const [imageUrl, setImageUrl] = useState<string>(data.imageUrl);
  const [height, setHeight] = useState<number>(data.size.height);
  const [width, setWidth] = useState<number>(data.size.width);
  const [weight, setWeight] = useState<number>(data.size.width);
  const [count, setCount] = useState<number>(data.count);

  const inputs: InputItemType[] = [
    {
      handler: setName,
      value: name,
      type: 'text',
      placeholder: 'Name'
    },
    {
      handler: setWeight,
      value: weight,
      type: 'text',
      placeholder: 'Weight'
    },
    {
      handler: setWidth,
      value: width,
      type: 'number',
      placeholder: 'Width'
    },
    {
      handler: setHeight,
      value: height,
      type: 'number',
      placeholder: 'Height'
    },
    {
      handler: setCount,
      value: count,
      type: 'number',
      placeholder: 'Count'
    },
    {
      handler: setImageUrl,
      value: imageUrl,
      type: 'text',
      placeholder: 'Url'
    },
  ]

  return <Modal
    open={open}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      {inputs.map((el: InputItemType) => {
        return <InputItem {...el} />
      })}

      <Button onClick={() => {
        updateHandler({ name, imageUrl, size: { height, width }, count, weight })
      }} >Update</Button>
      <Button onClick={() => {
        setOpen(false);
      }} >Cancel</Button>
    </Box>
  </Modal>
}

export default UpdateProductModal;