import { classNames } from "@/utils/classNames";
import { FormLabel } from "../FormLabel";
import { FormHelperText, FormControl } from "@mui/material";

export const FormItem = (props) => {
  const {
    name,
    label,
    required = false,
    errors,
    formValues,
    handleChange,
    placeholder = "",
    component,
    labelExtra,
    className,
    tooltip,
  } = props;
  return (
    <FormControl
      fullWidth
      margin="normal"
      error={errors.firstName}
      className={classNames("", className)}
      sx={{ "&": { marginTop: "24px" } }}
    >
      <FormLabel required={required} extra={labelExtra} tooltip={tooltip}>
        {label}
      </FormLabel>
      {component({
        name: name,
        value: formValues[name],
        onChange: handleChange,
        placeholder: placeholder,
      })}
      {errors.firstName && (
        <FormHelperText>First name is required.</FormHelperText>
      )}
    </FormControl>
  );
};
