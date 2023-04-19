import { Link } from "react-router-dom";
import { Outlet, Form, useLoaderData } from "react-router-dom";
import Workers from "../workers/workers";

export default function MainApp() {
  const { workers } = useLoaderData();
  console.log(workers);
  return (
    <>
      <div id="sidebar">
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {workers.length ? (
            <ul>
              {workers.map((worker) => (
                <li key={worker.id}>
                  <Link to={`contacts/${worker.id}`}>
                    {worker.first || worker.last ? (
                      <>
                        {worker.first} {worker.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {worker.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Workers />
        <Outlet />
      </div>
    </>
  );
}
