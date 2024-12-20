import { classNames } from "@/utils/classNames";
import { Box } from "@mui/material";

export default function Card({ children, className = "", ...props }) {
  return (
    <Box
      className={classNames(
        "border-[1px] border-sold border-[#2a3030] rounded-[16px]  p-[24px] bg-[#FFFFFF0F]",
        className
      )}
      {...props}
    >
      {children}
    </Box>
  );
}
