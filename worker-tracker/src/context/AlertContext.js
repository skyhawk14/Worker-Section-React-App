import { createContext, useState } from "react";
const initialState = {
  alertText: "",
  alertType: "",
};
const AlertContext = createContext({
  ...initialState,
  setAlert: () => {},
});

export const AlertProvider = ({ children }) => {
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState("");

  const setAlert = (text, type) => {
    setAlertText(text);
    setAlertType(type);

    setTimeout(() => {
      setAlertText("");
      setAlertType("");
    }, 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alertText,
        alertType,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
