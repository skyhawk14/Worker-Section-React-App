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

async function routerAction() {
  const contacts = await createContact();
  console.log(contacts);
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
]);
export { router };
