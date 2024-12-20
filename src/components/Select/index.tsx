import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MuiSelect from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: "#232B2BCC",
      border: "1px solid #FFFFFF1A",
      color: "white",
    },
  },
};

export default function Select({
  options = [],
  placeholder,
  ...props
}: {
  options: any;
  placeholder: string;
  props: any;
}) {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: "100%", mt: 3 }} className="!m-0">
        <MuiSelect
          {...props}
          sx={{
            height: "42px",
            borderRadius: "12px",
            backgroundColor: "#FFFFFF0D",
            border: "1px solid #FFFFFF1A",
            "&": {
              fontSize: "14px",
              color: "white",
              fontFamily: "RobotoMono",
              borderRadius: "12px", // 自定义圆角
              "& fieldset": {
                borderColor: "#FFFFFF1A !important", // 默认边框颜色
              },
              "&:hover fieldset": {
                borderColor: "#09FFF0 !important", // 悬停时边框颜色
              },
              "&.Mui-focused fieldset": {
                borderColor: "#09FFF0 !important", // 聚焦时边框颜色
              },
            },
          }}
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em className="text-gray-500">{placeholder}</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          {/* <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem> */}
          {options.map((opt) => (
            <MenuItem
              sx={{
                height: "42px",
                "&:hover": {
                  bgcolor: "#232B2B80",
                },
                "&.Mui-selected": {
                  //   bgcolor: "#232B2B80",
                  color: "#09FFF0",
                },
                "&.Mui-selected:hover": {
                  bgcolor: "#232B2B80",
                },
              }}
              key={opt.name}
              value={opt.name}
              //   style={getStyles(opt.name, personName, theme)}
            >
              {opt.label}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </div>
  );
}
