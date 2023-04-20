import { createBrowserRouter } from "react-router-dom";
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

async function routerAction(obj) {
  const contacts = await createContact();
  console.log(obj);
  return { contacts };
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    errorElement: <ErrorPage />,
    action: routerAction,
    loader: rootLoader,
    children: [
      {
        path: "workers/:workerId",
        element: <>Hello</>,
      },
    ],
  },
  {
    path: "/events",
    element: <h1>Hello</h1>,
    errorElement: <ErrorPage />,
    action: routerAction,
    loader: rootLoader,
  },
]);
export { router };
