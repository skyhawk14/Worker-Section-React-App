import { Alert } from "@mui/material";
import useAlert from "../custom-hooks/useAlert";

const AlertPopup = () => {
  const { alertText: text, alertType: type } = useAlert();
  console.log("alert upop", text, type);
  if (text && type) {
    return (
      <Alert
        className=""
        style={{
          position: "absolute",
          zIndex: 100,
          top: "60px",
          right: "20px",
        }}
        severity={type}
        sx={{
          zIndex: 10,
        }}
      >
        {text}
      </Alert>
    );
  } else {
    return <></>;
  }
};

export default AlertPopup;
