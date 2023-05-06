import { Outlet, useNavigate } from "react-router-dom";
import WebsiteAppBar from "../AppBar";
import { useEffect, useState } from "react";
import { auth } from "../firebase/setup";
import ErrorPage from "./error-page";
import AlertPopup from "../shared/AlertPopup";

export default function MainApp() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
      } else {
        return navigate("/login");
      }
    });
  }, [isLogin]);
  if (!isLogin) {
    return null;
  }
  return (
    <>
      <AlertPopup />
      <WebsiteAppBar />
      <div
        id="detail"
        style={{
          marginTop: "50px",
        }}
      >
        <Outlet />
      </div>
    </>
  );
}
