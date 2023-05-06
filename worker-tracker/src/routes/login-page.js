import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../store/slices/user-slice";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/setup";
import { useNavigate } from "react-router-dom";
import useAlert from "../custom-hooks/useAlert";
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
const Login = () => {
  const navigate = useNavigate();
  const { email, name } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { setAlert } = useAlert();
  const [error, setError] = useState("");
  const [clickedSubmit, setClickedSubmit] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [authState, setAuthState] = useState({
    isSignedIn: false,
    pending: true,
    user: null,
  });
  console.log(email, name);
  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
      debugger;
      if (user) {
        setAuthState({ user, pending: false, isSignedIn: !!user });
        dispatch(userSlice.actions.setLogin(true));
        return navigate("/");
      }
    });
    return () => unregisterAuthObserver();
  }, [auth]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setClickedSubmit(true);
      if (!isLogin) {
        createUserWithEmailAndPassword(auth, values.email, values.password)
          .then(() => {
            console.log("User created successfully");
            setAlert("User has been created successful!", "success");
            return navigate("/");
          })
          .catch((err) => {
            console.log("Unable to create user");
            setAlert("Failed to create user!", "error");
            setClickedSubmit(false);
            setError("Unable to create user");
            setTimeout(() => {
              setError("");
            }, 3000);
            debugger;
          });
      } else {
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then((val) => {
            const {
              user: { displayName, email },
            } = val;
            setAlert("User login successful!", "success");
            dispatch(userSlice.actions.setEmail({ email }));
            dispatch(userSlice.actions.setName({ name: displayName }));
            return navigate("/");
          })
          .catch((err) => {
            setClickedSubmit(false);
            setError("Incorrect login credentials!");
            setTimeout(() => {
              setError("");
            }, 3000);
            debugger;
          });
      }
      // signOut(auth).then(console.log).catch(console.log);
    },
  });
  return (
    <div className="w-6/12 m-auto border-solid border-2 border-black-500 p-16">
      <h1 className="text-3xl font-bold my-8 uppercase">
        {isLogin ? "Login" : "Sign Up"}
      </h1>
      <form className="flex flex-col" onSubmit={formik.handleSubmit}>
        <TextField
          className="m-8"
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <div className="h-8 w-full" />
        <TextField
          className="m-8"
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <div className="h-8 w-full" />
        <p className="text-red-600 text-xs my-1">{error !== "" ? error : ""}</p>
        <p
          className="cursor-pointer capitalize mb-3"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          {isLogin
            ? "New User? Click here to Sign Up"
            : "Already have an account? Login"}
        </p>
        <Button
          disabled={clickedSubmit}
          color="primary"
          variant="contained"
          className="p-4 m-auto"
          type="submit"
        >
          {!clickedSubmit ? "Submit" : "Verifying credentials..."}
        </Button>
      </form>
    </div>
  );
};
export default Login;
