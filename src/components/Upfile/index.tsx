import { Box } from "@mui/material";
import AddImg from "@/assets/form/add.png";
import Card from "../Card";
import { useRef, useState } from "react";
const Upfile = ({ onChange, name }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const onUpfile = (e) => {
    const file = e.target.files?.[0];

    setFile(file);
    if (name) {
      onChange({ target: { name, value: file } });
    } else {
      onChange(file);
    }
  };
  return (
    <Card
      className="flex justify-center items-center h-[90px] cursor-pointer"
      onClick={() => ref.current?.click()}
    >
      <div className="flex flex-col items-center">
        <img className="w-[16px] h-[16px] mb-[10px]" src={AddImg} alt="add" />
        <div className="text-[14px] text-[#fff] opacity-40 leading-[18px]">
          Choose File
        </div>
        <input ref={ref} type="file" hidden onChange={onUpfile} />
      </div>
    </Card>
  );
};

export default Upfile;
