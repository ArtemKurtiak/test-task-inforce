import React, {ChangeEvent} from "react";
import {TextField} from "@mui/material";

type Props = {
  type: string,
  value: any
  handler: any,
  placeholder?: string | undefined
}

const InputItem: React.FC<Props> = ({ type, value, handler, placeholder= '' }) => {
  return <TextField label={placeholder} type={type} value={value} onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    handler(e.target.value);
  }} />
}

export default InputItem;