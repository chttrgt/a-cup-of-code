import { useState } from "react";
import { FormContext } from "./FormContext";

const FormProvider = ({ children }) => {
  const [showActionForm, setShowActionForm] = useState(false);
  const data = {
    showActionForm,
    setShowActionForm,
  };

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export default FormProvider;
