import { createBrowserRouter } from "react-router-dom";
import AlertPopup from "../shared/AlertPopup";
import CreateWorker from "../workers/create-worker";
import WorkerDetails from "../workers/worker-details";
import Workers from "../workers/workers";
import ErrorPage from "./error-page";
import Login from "./login-page";
import MainApp from "./main-app";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <AlertPopup />
        <MainApp />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Workers />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/create",
        element: <CreateWorker />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/workers/:workerId",
        element: <WorkerDetails />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <>
        <AlertPopup />
        <Login />
      </>
    ),
    errorElement: <ErrorPage />,
  },
]);
export { router };
