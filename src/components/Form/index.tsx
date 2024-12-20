import React from "react";

export const useForm = ({config}:{config:any})=>{
    const [formValues, setFormValues] = React.useState<any>(config.reduce((acc, field) => {
        acc[field.name] = field.defaultValue || "";
        return acc;
      }, {}));
    
      const [errors, setErrors] = React.useState<any>(config.reduce((acc, field) => {
        acc[field.name] = false;
        return acc;
      }, {}));
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    
        // Reset error state on change
        setErrors((prev) => ({ ...prev, [name]: false }));
      };
    return {
        formValues,
        errors,
        handleChange,
        setErrors,
        setFormValues
    }
}