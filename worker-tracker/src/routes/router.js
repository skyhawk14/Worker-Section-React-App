import { createBrowserRouter } from "react-router-dom";
import CreateWorker from "../workers/create-worker";
import WorkerDetails from "../workers/worker-details";
import WorkerDetailsContainer from "../workers/worker-details-container";
import Workers from "../workers/workers";
import ErrorPage from "./error-page";
import MainApp from "./main-app";

function getContacts() {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          first: "mani",
          last: "kushwaha",
          favourite: true,
        },
        {
          first: "mani1",
          last: "kushwaha",
          favourite: false,
        },
      ]);
    }, 200);
  });
}
async function rootLoader() {
  const workers = await getContacts();
  console.log(workers);
  return { workers };
}

function createContact() {
  return new Promise((res) => {
    setTimeout(() => {
      res([]);
    }, 200);
  });
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "/workers",
        element: <Workers />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/workers/create",
        element: <CreateWorker />,
        errorElement: <ErrorPage />,
      },
      {
        path: "workers/:workerId",
        element: <WorkerDetails />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
export { router };
